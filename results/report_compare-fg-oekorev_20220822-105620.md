# QGIS Benchmark summary compare-fg-oekorev (20220822-105620)


compare different versions of QGIS servers using the same settings and a working map request

_run completed in 00h 03m 51s_

_Sample size per configuration 36_
## Summary plot
An interactive summary plot can be found [here](report_compare-fg-oekorev_20220822-105620_plot.html)

## Summary
| name    | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis322 | Global  |             20.1 | +0.0%                    |             135.3 | +0.0%                     |             58 | +0.0%                  |           332.5 | +0.0%                   |          151 |        11317 |              5.9 |            36 |            0 |     9827.5 |     9531.4 |     8040.5 |      26.4 |         8 |       2.9 |          0 |

## Aggregated
| name                          | group            |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------|------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis322 > somap318_fg_oekorev | somap_fg_oekorev |              4.8 | +0.0%                    |               0.2 | +0.0%                     |            2.5 | +0.0%                  |           113.5 | +0.0%                   |           70 |          344 |              3   |            18 |            0 |     -inf   |      nan   |      inf   |    -inf   |       nan |     inf   |          0 |
| qgis322 > somap318_fix        | somap_fix        |             15.3 | +0.0%                    |             135.1 | +0.0%                     |           55.5 | +0.0%                  |           219   | +0.0%                   |           81 |        10973 |              2.9 |            18 |            0 |     9827.5 |     9531.4 |     8040.5 |      26.4 |         8 |       2.9 |          0 |

## Detail
| name                                                                                                                                                                    | group                             |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis322 > somap318_fg_oekorev > fg_oekorev.txt](../results/details/compare-fg-oekorev/20220822-105620/qgis322/somap318_fg_oekorev/fg_oekorev.txt/dashboard/index.html) | somap_fg_oekorev > fg_oekorev.txt |              4.8 | +0.0%                    |               0.2 | +0.0%                     |            2.5 | +0.0%                  |           113.5 | +0.0%                   |            18 |            0 |          0 |       138.722 |           70 |          344 |         299.9 |           344 |           344 |     26.3158  |               4475.44  |          10.1768   |              3   |      nan   |      nan   |      nan   |     nan   |       nan |     nan   |
| [qgis322 > somap318_fix > fg_oekorev.txt](../results/details/compare-fg-oekorev/20220822-105620/qgis322/somap318_fix/fg_oekorev.txt/dashboard/index.html)               | somap_fix > fg_oekorev.txt        |             15.3 | +0.0%                    |             135.1 | +0.0%                     |           55.5 | +0.0%                  |           219   | +0.0%                   |            18 |            0 |          0 |      3081.67  |           81 |        10973 |       10876.7 |         10973 |         10973 |      1.59264 |                266.517 |           0.605016 |              2.9 |     9827.5 |     9531.4 |     8040.5 |      26.4 |         8 |       2.9 |

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

  # qgis218:
  #   active: yes
  #   inherit: base
  #   template: docker-compose-qgis-2
  #   path-prefix: 'ows'
  #   projects:
  #     somap218_fix:
  #       - fg_oekorev.txt
  #     somap218_fg_oekorev:
  #       - fg_oekorev.txt

  qgis322:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.22'
    projects:
      somap318_fix:
        - fg_oekorev.txt
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
      somap318_fix:
      - fg_oekorev.txt
    template: docker-compose-qgis-3-nginx

```