# QGIS Benchmark summary compare-fg-raster (20220824-094525)


compare different versions of QGIS servers using the same settings and a working map request

_run completed in 00h 03m 37s_

_Sample size per configuration 9_
## Summary plot
An interactive summary plot can be found [here](report_compare-fg-raster_20220824-094525_plot.html)

## Summary
| name        | group   |   tests duration | tests duration penalty   |   warmup duration |   warmup duration penalty |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis322_big | Global  |              4.8 | +0.0%                    |               0   |                         0 |            0   | +0.0%                  |               3 | +0.0%                   |            3 |           23 |                0 |             9 |            9 |     -inf   |      nan   |      inf   |      -inf |     nan   |     inf   |        100 |
| qgis218_big | Global  |             10.9 | +127.1%                  |             172.6 |                         0 |           48.1 | +98124.5%              |            6375 | +212400.0%              |         2934 |         6741 |                0 |             9 |            0 |     9688.6 |     9220.2 |     8232.1 |        56 |      34.3 |       0.2 |          0 |

## Aggregated
| name                       | group     |   tests duration | tests duration penalty   |   warmup duration |   warmup duration penalty |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------------------|-----------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis322_big > somap322_fix | somap_fix |              4.8 | +0.0%                    |               0   |                         0 |            0   | +0.0%                  |               3 | +0.0%                   |            3 |           23 |                0 |             9 |            9 |     -inf   |      nan   |      inf   |      -inf |     nan   |     inf   |        100 |
| qgis218_big > somap218_fix | somap_fix |             10.9 | +127.1%                  |             172.6 |                         0 |           48.1 | +98124.5%              |            6375 | +212400.0%              |         2934 |         6741 |                0 |             9 |            0 |     9688.6 |     9220.2 |     8232.1 |        56 |      34.3 |       0.2 |          0 |

## Detail
| name                                                                                                                                                           | group                     |   tests duration | tests duration penalty   |   warmup duration |   warmup duration penalty |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis322_big > somap322_fix > fg_raster.txt](../results/details/compare-fg-raster/20220824-094525/qgis322_big/somap322_fix/fg_raster.txt/dashboard/index.html) | somap_fix > fg_raster.txt |              4.8 | +0.0%                    |               0   |                         0 |            0   | +0.0%                  |               3 | +0.0%                   |             9 |            9 |        100 |       5.44444 |            3 |           23 |            23 |            23 |            23 |    204.545   |               70.9118  |          76.1053   |                0 |      nan   |      nan   |      nan   |       nan |     nan   |     nan   |
| [qgis218_big > somap218_fix > fg_raster.txt](../results/details/compare-fg-raster/20220824-094525/qgis218_big/somap218_fix/fg_raster.txt/dashboard/index.html) | somap_fix > fg_raster.txt |             10.9 | +127.1%                  |             172.6 |                         0 |           48.1 | +98124.5%              |            6375 | +212400.0%              |             9 |            0 |          0 |    5347.78    |         2934 |         6741 |          6741 |          6741 |          6741 |      1.27334 |                4.86457 |           0.473774 |                0 |     9688.6 |     9220.2 |     8232.1 |        56 |      34.3 |       0.2 |

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