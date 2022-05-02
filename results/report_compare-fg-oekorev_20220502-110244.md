# QGIS Benchmark summary compare-fg-oekorev (20220502-110244)


compare different versions of QGIS servers using the same settings and a working map request

_run completed in 00h 00m 45s_

_Sample size per configuration 18_
## Summary plot
An interactive summary plot can be found [here](report_compare-fg-oekorev_20220502-110244_plot.html)

## Summary
| name    | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 | Global  |              4.7 | +0.0%                    |               3.4 | +17.2%                    |            2   | +0.0%                  |             113 | +0.0%                   |           65 |          199 |              2.7 |            18 |            0 |       -inf |        nan |        inf |      -inf |       nan |       inf |          0 |
| qgis322 | Global  |              4.8 | +2.1%                    |               2.9 | +0.0%                     |            2.4 | +16.6%                 |             114 | +0.9%                   |           74 |          254 |              3   |            18 |            0 |       -inf |        nan |        inf |      -inf |       nan |       inf |          0 |

## Aggregated
| name                          | group            |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------|------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 > somap218_fg_oekorev | somap_fg_oekorev |              4.7 | +0.0%                    |               3.4 | +17.2%                    |            2   | +0.0%                  |             113 | +0.0%                   |           65 |          199 |              2.7 |            18 |            0 |       -inf |        nan |        inf |      -inf |       nan |       inf |          0 |
| qgis322 > somap318_fg_oekorev | somap_fg_oekorev |              4.8 | +2.1%                    |               2.9 | +0.0%                     |            2.4 | +16.6%                 |             114 | +0.9%                   |           74 |          254 |              3   |            18 |            0 |       -inf |        nan |        inf |      -inf |       nan |       inf |          0 |

## Detail
| name                                                                                                                                                                    | group                             |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218 > somap218_fg_oekorev > fg_oekorev.txt](../results/details/compare-fg-oekorev/20220502-110244/qgis218/somap218_fg_oekorev/fg_oekorev.txt/dashboard/index.html) | somap_fg_oekorev > fg_oekorev.txt |              4.7 | +0.0%                    |               3.4 | +17.2%                    |            2   | +0.0%                  |             113 | +0.0%                   |            18 |            0 |          0 |       113.056 |           65 |          199 |         190.9 |           199 |           199 |      30.5085 |                4720.58 |            11.7982 |              2.7 |        nan |        nan |        nan |       nan |       nan |       nan |
| [qgis322 > somap318_fg_oekorev > fg_oekorev.txt](../results/details/compare-fg-oekorev/20220502-110244/qgis322/somap318_fg_oekorev/fg_oekorev.txt/dashboard/index.html) | somap_fg_oekorev > fg_oekorev.txt |              4.8 | +2.1%                    |               2.9 | +0.0%                     |            2.4 | +16.6%                 |             114 | +0.9%                   |            18 |            0 |          0 |       131.778 |           74 |          254 |         233.3 |           254 |           254 |      28.754  |                4890.07 |            11.1197 |              3   |        nan |        nan |        nan |       nan |       nan |       nan |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/mkuhn/so-qgis-bench/logs/prepared
parallel-requests: 10
reports-dir: ./reports/
result-dir: /home/mkuhn/so-qgis-bench/results

```
### test configurations

```
description: 'compare different versions of QGIS servers using the same settings and a working map request'
test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '6'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '1' #QGIS3
      QGIS_FCGI_PROCESSES: '1' #QGIS2
      PG_SERVICE: 'pg_service.conf'

  qgis218:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
#      somap218_fix:
#        - fg_oekorev.txt
      somap218_fg_oekorev:
        - fg_oekorev.txt

  qgis322:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.22'
    projects:
#      somap318_fix:
#        - fg_oekorev.txt
      somap318_fg_oekorev:
        - fg_oekorev.txt
```
### parsed test configurations

```
description: compare different versions of QGIS servers using the same settings and
  a working map request
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
  qgis218:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
    inherit: base
    path-prefix: ows
    projects:
      somap218_fg_oekorev:
      - fg_oekorev.txt
    template: docker-compose-qgis-2
  qgis322:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.22'
    inherit: base
    path-prefix: ogc
    projects:
      somap318_fg_oekorev:
      - fg_oekorev.txt
    template: docker-compose-qgis-3-nginx

```