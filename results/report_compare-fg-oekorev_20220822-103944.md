# QGIS Benchmark summary compare-fg-oekorev (20220822-103944)


compare different versions of QGIS servers using the same settings and a working map request

_run completed in 00h 03m 20s_

_Sample size per configuration 36_
## Summary plot
An interactive summary plot can be found [here](report_compare-fg-oekorev_20220822-103944_plot.html)

## Summary
| name    | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 | Global  |             11.6 | +0.0%                    |              97.6 | +0.0%                     |             13 | +0.0%                  |             331 | +0.0%                   |          174 |         2452 |              5.4 |            36 |            0 |     8039.1 |     8039.1 |     8039.1 |      14.2 |      14.2 |      14.2 |          0 |

## Aggregated
| name                          | group            |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------|------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 > somap218_fg_oekorev | somap_fg_oekorev |              5.8 | +0.0%                    |               0.3 | +0.0%                     |            3.8 | +0.0%                  |             137 | +0.0%                   |           69 |         1185 |              2.7 |            18 |            0 |     8039.1 |     8039.1 |     8039.1 |      14.2 |      14.2 |      14.2 |          0 |
| qgis218 > somap218_fix        | somap_fix        |              5.8 | +0.0%                    |              97.3 | +0.0%                     |            9.3 | +0.0%                  |             194 | +0.0%                   |          105 |         1267 |              2.7 |            18 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |

## Detail
| name                                                                                                                                                                    | group                             |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218 > somap218_fg_oekorev > fg_oekorev.txt](../results/details/compare-fg-oekorev/20220822-103944/qgis218/somap218_fg_oekorev/fg_oekorev.txt/dashboard/index.html) | somap_fg_oekorev > fg_oekorev.txt |              5.8 | +0.0%                    |               0.3 | +0.0%                     |            3.8 | +0.0%                  |             137 | +0.0%                   |            18 |            0 |          0 |       208.889 |           69 |         1185 |         427.2 |          1185 |          1185 |     10.514   |                1626.84 |            4.06597 |              2.7 |     8039.1 |     8039.1 |     8039.1 |      14.2 |      14.2 |      14.2 |
| [qgis218 > somap218_fix > fg_oekorev.txt](../results/details/compare-fg-oekorev/20220822-103944/qgis218/somap218_fix/fg_oekorev.txt/dashboard/index.html)               | somap_fix > fg_oekorev.txt        |              5.8 | +0.0%                    |              97.3 | +0.0%                     |            9.3 | +0.0%                  |             194 | +0.0%                   |            18 |            0 |          0 |       514.778 |          105 |         1267 |        1250.8 |          1267 |          1267 |      9.66702 |                1495.78 |            3.67234 |              2.7 |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |

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
      somap218_fix:
        - fg_oekorev.txt
      somap218_fg_oekorev:
        - fg_oekorev.txt

  qgis322:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.18'
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
      somap218_fix:
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
      QGIS_VERSION: '3.18'
    inherit: base
    path-prefix: ogc
    projects:
      somap318_fg_oekorev:
      - fg_oekorev.txt
      somap318_fix:
      - fg_oekorev.txt
    template: docker-compose-qgis-3-nginx

```