# QGIS Benchmark summary compare-fg-raster (20220915-120257)


compare different versions of QGIS servers using the same settings and a working map request

_run completed in 00h 09m 05s_

_Sample size per configuration 9_
## Summary plot
An interactive summary plot can be found [here](report_compare-fg-raster_20220915-120257_plot.html)

## Summary
| name          | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218_small | Global  |              4.7 | +0.0%                    |               3.8 | +18.7%                    |            2.2 | +0.0%                  |             263 | +0.0%                   |          211 |          285 |             13.6 |             9 |            0 |     6196.1 |     6196.1 |     6196.1 |       0.2 |       0.2 |       0.2 |          0 |
| qgis322_small | Global  |              4.9 | +4.3%                    |               3.2 | +0.0%                     |            2.7 | +22.6%                 |             322 | +22.4%                  |          251 |          341 |             15.2 |             9 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis218_big   | Global  |             10.7 | +127.7%                  |             183.8 | +5643.8%                  |           47.1 | +1999.3%               |            6451 | +2352.9%                |         2475 |         6761 |             13.6 |             9 |            0 |     9863.1 |     9424.9 |     8781.1 |      56.3 |      35.9 |       3.3 |          0 |
| qgis322_big   | Global  |             33.2 | +606.4%                  |             241.5 | +7446.9%                  |           31.7 | +1315.1%               |             324 | +23.2%                  |          257 |        29284 |             15.2 |             9 |            0 |    11913.2 |    11828.6 |    10881.8 |      19.6 |       2.9 |       1.8 |          0 |

## Aggregated
| name                                | group            |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------|------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218_small > somap218_fg_oekorev | somap_fg_oekorev |              4.7 | +0.0%                    |               3.8 | +18.7%                    |            2.2 | +0.0%                  |             263 | +0.0%                   |          211 |          285 |             13.6 |             9 |            0 |     6196.1 |     6196.1 |     6196.1 |       0.2 |       0.2 |       0.2 |          0 |
| qgis322_small > somap322_fg_oekorev | somap_fg_oekorev |              4.9 | +4.3%                    |               3.2 | +0.0%                     |            2.7 | +22.6%                 |             322 | +22.4%                  |          251 |          341 |             15.2 |             9 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis218_big > somap218_fix          | somap_fix        |             10.7 | +0.0%                    |             183.8 | +0.0%                     |           47.1 | +48.3%                 |            6451 | +1891.0%                |         2475 |         6761 |             13.6 |             9 |            0 |     9863.1 |     9424.9 |     8781.1 |      56.3 |      35.9 |       3.3 |          0 |
| qgis322_big > somap322_fix          | somap_fix        |             33.2 | +210.3%                  |             241.5 | +31.4%                    |           31.7 | +0.0%                  |             324 | +0.0%                   |          257 |        29284 |             15.2 |             9 |            0 |    11913.2 |    11828.6 |    10881.8 |      19.6 |       2.9 |       1.8 |          0 |

## Detail
| name                                                                                                                                                                             | group                            |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218_small > somap218_fg_oekorev > fg_raster.txt](../results/details/compare-fg-raster/20220915-120257/qgis218_small/somap218_fg_oekorev/fg_raster.txt/dashboard/index.html) | somap_fg_oekorev > fg_raster.txt |              4.7 | +0.0%                    |               3.8 | +18.7%                    |            2.2 | +0.0%                  |             263 | +0.0%                   |             9 |            0 |          0 |       249.111 |          211 |          285 |           285 |           285 |           285 |    12.7841   |              19817.7   |           4.90639  |             13.6 |     6196.1 |     6196.1 |     6196.1 |       0.2 |       0.2 |       0.2 |
| [qgis322_small > somap322_fg_oekorev > fg_raster.txt](../results/details/compare-fg-raster/20220915-120257/qgis322_small/somap322_fg_oekorev/fg_raster.txt/dashboard/index.html) | somap_fg_oekorev > fg_raster.txt |              4.9 | +4.3%                    |               3.2 | +0.0%                     |            2.7 | +22.6%                 |             322 | +22.4%                  |             9 |            0 |          0 |       305.444 |          251 |          341 |           341 |           341 |           341 |    12        |              20696.6   |           4.60547  |             15.2 |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis218_big > somap218_fix > fg_raster.txt](../results/details/compare-fg-raster/20220915-120257/qgis218_big/somap218_fix/fg_raster.txt/dashboard/index.html)                   | somap_fix > fg_raster.txt        |             10.7 | +0.0%                    |             183.8 | +0.0%                     |           47.1 | +48.3%                 |            6451 | +1891.0%                |             9 |            0 |          0 |      5229.67  |         2475 |         6761 |          6761 |          6761 |          6761 |     1.30284  |               2019.64  |           0.491109 |             13.6 |     9863.1 |     9424.9 |     8781.1 |      56.3 |      35.9 |       3.3 |
| [qgis322_big > somap322_fix > fg_raster.txt](../results/details/compare-fg-raster/20220915-120257/qgis322_big/somap322_fix/fg_raster.txt/dashboard/index.html)                   | somap_fix > fg_raster.txt        |             33.2 | +210.3%                  |             241.5 | +31.4%                    |           31.7 | +0.0%                  |             324 | +0.0%                   |             9 |            0 |          0 |      3525.22  |          257 |        29284 |         29284 |         29284 |         29284 |     0.303951 |                524.229 |           0.114575 |             15.2 |    11913.2 |    11828.6 |    10881.8 |      19.6 |       2.9 |       1.8 |

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

  qgis218_small:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_fg_oekorev:
        - fg_raster.txt

  qgis218_big:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_fix:
        - fg_raster.txt

  qgis322_small:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.22'
    projects:
      somap322_fg_oekorev:
        - fg_raster.txt

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
  qgis218_small:
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
  qgis322_small:
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
      somap322_fg_oekorev:
      - fg_raster.txt
    template: docker-compose-qgis-3-nginx

```