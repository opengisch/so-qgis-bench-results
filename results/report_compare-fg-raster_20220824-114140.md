# QGIS Benchmark summary compare-fg-raster (20220824-114140)


compare different versions of QGIS servers using the same settings and a working map request

_run completed in 00h 08m 31s_

_Sample size per configuration 9_
## Summary plot
An interactive summary plot can be found [here](report_compare-fg-raster_20220824-114140_plot.html)

## Summary
| name        | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis322_big | Global  |              4.9 | +0.0%                    |             285.5 | +57.5%                    |            3.4 | +0.0%                  |             406 | +0.0%                   |          271 |          425 |             15.2 |             9 |            0 |    13180.5 |    12993   |    12805.4 |      22.8 |      12.8 |       2.9 |          0 |
| qgis218_big | Global  |             10.7 | +118.4%                  |             181.3 | +0.0%                     |           47.8 | +1297.2%               |            6358 | +1466.0%                |         2973 |         6623 |              0   |             9 |            0 |    10995.8 |    10560.3 |     9944.4 |      51.9 |      36.8 |       2.7 |          0 |

## Aggregated
| name                       | group     |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------------------|-----------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis322_big > somap322_fix | somap_fix |              4.9 | +0.0%                    |             285.5 | +57.5%                    |            3.4 | +0.0%                  |             406 | +0.0%                   |          271 |          425 |             15.2 |             9 |            0 |    13180.5 |    12993   |    12805.4 |      22.8 |      12.8 |       2.9 |          0 |
| qgis218_big > somap218_fix | somap_fix |             10.7 | +118.4%                  |             181.3 | +0.0%                     |           47.8 | +1297.2%               |            6358 | +1466.0%                |         2973 |         6623 |              0   |             9 |            0 |    10995.8 |    10560.3 |     9944.4 |      51.9 |      36.8 |       2.7 |          0 |

## Detail
| name                                                                                                                                                           | group                     |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis322_big > somap322_fix > fg_raster.txt](../results/details/compare-fg-raster/20220824-114140/qgis322_big/somap322_fix/fg_raster.txt/dashboard/index.html) | somap_fix > fg_raster.txt |              4.9 | +0.0%                    |             285.5 | +57.5%                    |            3.4 | +0.0%                  |             406 | +0.0%                   |             9 |            0 |          0 |       379.778 |          271 |          425 |           425 |           425 |           425 |      9.43396 |              16270.9   |           3.5101   |             15.2 |    13180.5 |    12993   |    12805.4 |      22.8 |      12.8 |       2.9 |
| [qgis218_big > somap218_fix > fg_raster.txt](../results/details/compare-fg-raster/20220824-114140/qgis218_big/somap218_fix/fg_raster.txt/dashboard/index.html) | somap_fix > fg_raster.txt |             10.7 | +118.4%                  |             181.3 | +0.0%                     |           47.8 | +1297.2%               |            6358 | +1466.0%                |             9 |            0 |          0 |      5306.33  |         2973 |         6623 |          6623 |          6623 |          6623 |      1.32528 |                  5.063 |           0.493099 |              0   |    10995.8 |    10560.3 |     9944.4 |      51.9 |      36.8 |       2.7 |

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

  # qgis218_small:
  #   active: yes
  #   inherit: base
  #   template: docker-compose-qgis-2
  #   path-prefix: 'ows'
  #   projects:
  #     somap218_fg_oekorev:
  #       - fg_raster.txt

  qgis218_big:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_fix:
        - fg_raster.txt

  # qgis322_small:
  #   active: yes
  #   inherit: base
  #   template: docker-compose-qgis-3-nginx
  #   path-prefix: 'ogc'
  #   compose-variables:
  #     QGIS_VERSION: '3.22'
  #   projects:
  #     somap322_fg_oekorev:
  #       - fg_raster.txt

  qgis322_big:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.22'
    projects:
      somap322_fix:
        - fg_raster.txt
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
  qgis218_big:
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
      somap218_fix:
      - fg_raster.txt
    template: docker-compose-qgis-2
  qgis322_big:
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
      somap322_fix:
      - fg_raster.txt
    template: docker-compose-qgis-3-nginx

```