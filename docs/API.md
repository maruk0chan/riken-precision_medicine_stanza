# API策定

## \<Gene>
### Gene Master
request
```
master
```

response
```json
{
  "columns": [
    { "id": "uniprot_acc", "label": "Uniprot_acc", "category": "gene" },
    { "id": "variant", "label": "Variant", "category": "variant" },
    {
      "id": "fe_bind_mean",
      "label": "FE_Bind_mean",
      "category": "fe_bind_mean"
    },
    { "id": "fe_bind_std", "label": "FE_Bind_std", "category": "fe_bind_std" }
  ],
  "calculations": [
    {
      "id": "mutation_fep",
      "label": "Mutation_FEP",
      "type": "drug",
      "columns": [
        "uniprot_acc",
        "variant",
        "fe_bind_mean",
        "fe_bind_std",
        "cadd",
        "fathmm-mkl",
        "lrt",
        "mutationtaster",
        "mutationassessor",
        "polyphen2_hdiv",
        "polyphen2_hvar",
        "primateai",
        "provean",
        "revel",
        "sift4g"
      ]
    }
  ]
}
```

--- 
### Gene Search
request
```
gene?q=[keyword] 
```

response
```json
[
  {
    "id":"atk1"
    "label":"AKT1"
    "uniprot_acc":["AKT","AKT1"]
    "calculated_results":[
      {
         "id": "mutation_fep",
         "calculation_result_id": "???",  // 存在するかわかりませんが、一応
         "url": "xxx",
      }
    ]
  },
...

]
```

position, locationはこの中に含める?

--- 
### Gene Individual
request
```
gene/[gene_id]
```

response
```json
{
  "id": "egfr",
  "label": "EGFR",
  "uniprot_acc": "Epidermal growth factor receptor",
  "other_public_db_info": "xxx",
  "molstar": xxx,  // 何が必要か分からないので、仮にこうしました。　.pdb, .gro, .xtc, e.t.c...,
  "graph": xxx,  // 何が必要か分からないので、仮にこうしました。
}
```

### Gene variants

request
```
gene/[gene_id]/variants
```
  
response
```json
[
  {
    "calculation": "mutation_fep",
    "uniprot_acc": "q9um73",
    "compound_id": "alectinib",
    "variant": "a1251d",
    "fe_bind_mean": 0.0633,
    "fe_bind_std": 0.8135,
    "cadd": 0.91297,
    "fathmm-mkl": 0.86437,
    "lrt": 0.47681,
    "mutationtaster": 0.81001,
    "mutationassessor": 0.90898,
    "polyphen2_hdiv": 0.90584,
    "polyphen2_hvar": 0.97372,
    "primateai": 0.93397,
    "provean": 0.88963,
    "revel": 0.99024,
    "sift4g": 0.92824
  },

...

]
```
画面上に出ている全てのリストがほしい

--- 
## \<Variant>
### Variant Master
request
```
master
```

response
```json
// 未定
```
  
--- 
## Variant Search

request
```
variant?q=[keyword]
```

```json
response
[
  {
    "id": "grch37_chr12_25398285_25398285_c_a",
    "label": "GRCh37_chr12_25398285_25398285_C_A",
    "hgvs": ["ENST00000256078:8:c.35G>T", "ENST00000256078:8:p.Gly12Cys"],
    "mgend": "xxx",
    "clinvar": "xxx",
    "calculated_results": [
      {
        "id": "mutation_fep",
        "calculation_result_id": "???",
        "url": "xxx"
      }
    ]
  }
  ...
]
```

idを短くしたいけれども、どうすれば一意の値になるかがわからず

--- 
## Variant  Individual

request
```
variant/[variant_id]
```

response
```json
{
  "id": "grch37_chr7_55249071_55249071_c_t",
  "label": "GRCh37_chr7_55249071_55249071_C_T (E749V)",
  "genome": [
    { "assembly": "GRCh37" },
    { "chromosome": "7" },
    { "position": "55249071" }
  ],
  "hgvs": [
    { "refseq": { "genome": "XXXX", "transcript": "NM_05228:3c.2369C.T" } },
    {
      "ensembl": {
        "genome": "XXXX",
        "transcript": "ENST000000275493.6:c.2369C.T"
      }
    }
  ],
  "annotation": {
    "default": [
      {
        "mgend": {
          "significance": "pathgenic",
          "disease": "xxx",
          "number_of_variants": "xxx"
        }
      },
      {
        "clinvar": {
          "significance": "pathgenic",
          "disease": "xxx",
          "number_of_variants": "xxx"
        }
      },
      {
        "oncokb": {
          "significance": "oncogenic",
          "disease": "xxx",
          "number_of_variants": "xxx"
        }
      }
    ],
    "oncokb": {
      "oncogenic": "XXX",
      "mutation_effect": "XXX"
    },
    "oncokb_level": {
      "asimertinib": "3A",
      "afatinib": "1B"
    },
    "prediction_score": {
      "cadd": 0.57,
      "fathmm-mkl": 0.57,
      "lrt": 0.57,
      "mutationtaster": 0.57,
      "mutationassessor": 0.57,
      "polyphen2_hdiv": 0.57,
      "polyphen2_hvar": 0.57,
      "primateai": 0.57,
      "provean": 0.57,
      "revel": 0.57,
      "sift4g": 0.57
    }
  },
  "calculated_results": [
    {
      "mutation_fep": {
        "table": [
          {
            "drug": "Cetuximab",
            "ave": "XXX",
            "sd": "XXX"
          },
          {
            "drug": "Dasatinib",
            "ave": "XXX",
            "sd": "XXX"
          }
        ],
        "scatter_plot": XXX // 何が必要か分からないので、仮にこうしました。
      }
    },
    {
      "protein": {
        "table": [
          {
            "drug": "Cetuximab",
            "ave": "XXX",
            "sd": "XXX"
          },
          {
            "drug": "Dasatinib",
            "ave": "XXX",
            "sd": "XXX"
          }
        ],
        "scatter_plot": XXX // 何が必要か分からないので、仮にこうしました。
      }
    }
  ],
  "molstar": XXX // 何が必要か分からないので、仮にこうしました。
}
```

Annotation の中身の１つ目はdefaultではないような気もする、、、

--- 
## \<Disease>
### disease Search

request
```
diseaset?q=[keyword]
```

response
```json
[
  {
    "id": "lung_cancer",
    "label": "Lung cancer",
    "gene": "XXX",
    "uniprot_acc": ["XXX", "XXX"],
    "hgvs": ["XXX", "XXX"],
    "variant": "XXX",
    "mgend": "xxx",
    "clinvar": "xxx",
    "calculated_results": [
      {
        "id": "mutation_fep",
        "calculation_result_id": "???",
        "url": "xxx"
      }
    ]
  }
  ...
]
```

---
## \<calculation>
### calculation  Individual

request
```
未定
```

response
```json
//情報が足りず未定
```
