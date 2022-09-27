# QGIS Benchmark summary compare-fg-raster-vector-mix (20220919-113744)


compare different versions of QGIS servers using the same settings and a working map request

_run completed in 00h 09m 13s_

_Sample size per configuration 18_
## Summary plot
An interactive summary plot can be found [here](report_compare-fg-raster-vector-mix_20220919-113744_plot.html)

## Summary
| name          | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis322_small | Global  |              4.7 | +0.0%                    |               3.3 | +3.1%                     |            4.3 | +0.0%                  |           243.5 | +0.4%                   |           76 |          359 |             16.6 |            18 |            0 |     7558.3 |     7558.3 |     7558.3 |       6.7 |       6.7 |       6.7 |          0 |
| qgis322_big   | Global  |              5   | +6.4%                    |             281.3 | +8690.6%                  |            4.8 | +11.5%                 |           282   | +16.3%                  |          121 |          386 |             16.6 |            18 |            0 |    12850.2 |    12556.3 |    12262.3 |      23.9 |      13.4 |       2.9 |          0 |
| qgis218_small | Global  |              5.6 | +19.1%                   |               3.2 | +0.0%                     |            5.4 | +27.1%                 |           242.5 | +0.0%                   |          102 |         1170 |             15   |            18 |            0 |     7789.5 |     7789.5 |     7789.5 |       2.4 |       2.4 |       2.4 |          0 |
| qgis218_big   | Global  |             10.8 | +129.8%                  |             180.8 | +5550.0%                  |           52.7 | +1130.0%               |          2984   | +1130.5%                |           76 |         6551 |             15   |            18 |            0 |    11150.3 |    10561.4 |     9712.4 |      62.7 |      41.3 |       3.4 |          0 |

## Aggregated
| name                                | group            |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------|------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis322_small > somap322_fg_oekorev | somap_fg_oekorev |              4.7 | +0.0%                    |               3.3 | +3.1%                     |            4.3 | +0.0%                  |           243.5 | +0.4%                   |           76 |          359 |             16.6 |            18 |            0 |     7558.3 |     7558.3 |     7558.3 |       6.7 |       6.7 |       6.7 |          0 |
| qgis218_small > somap218_fg_oekorev | somap_fg_oekorev |              5.6 | +19.1%                   |               3.2 | +0.0%                     |            5.4 | +27.1%                 |           242.5 | +0.0%                   |          102 |         1170 |             15   |            18 |            0 |     7789.5 |     7789.5 |     7789.5 |       2.4 |       2.4 |       2.4 |          0 |
| qgis322_big > somap322_fix          | somap_fix        |              5   | +0.0%                    |             281.3 | +55.6%                    |            4.8 | +0.0%                  |           282   | +0.0%                   |          121 |          386 |             16.6 |            18 |            0 |    12850.2 |    12556.3 |    12262.3 |      23.9 |      13.4 |       2.9 |          0 |
| qgis218_big > somap218_fix          | somap_fix        |             10.8 | +116.0%                  |             180.8 | +0.0%                     |           52.7 | +1002.6%               |          2984   | +958.2%                 |           76 |         6551 |             15   |            18 |            0 |    11150.3 |    10561.4 |     9712.4 |      62.7 |      41.3 |       3.4 |          0 |

## Detail
| name                                                                                                                                                                                                      | group                                   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis322_small > somap322_fg_oekorev > fg_raster_vector.txt](../results/details/compare-fg-raster-vector-mix/20220919-113744/qgis322_small/somap322_fg_oekorev/fg_raster_vector.txt/dashboard/index.html) | somap_fg_oekorev > fg_raster_vector.txt |              4.7 | +0.0%                    |               3.3 | +3.1%                     |            4.3 | +0.0%                  |           243.5 | +0.4%                   |            18 |            0 |          0 |       238.111 |           76 |          359 |         355.4 |           359 |           359 |     19.8675  |               18795.1  |            7.65405 |             16.6 |     7558.3 |     7558.3 |     7558.3 |       6.7 |       6.7 |       6.7 |
| [qgis218_small > somap218_fg_oekorev > fg_raster_vector.txt](../results/details/compare-fg-raster-vector-mix/20220919-113744/qgis218_small/somap218_fg_oekorev/fg_raster_vector.txt/dashboard/index.html) | somap_fg_oekorev > fg_raster_vector.txt |              5.6 | +19.1%                   |               3.2 | +0.0%                     |            5.4 | +27.1%                 |           242.5 | +0.0%                   |            18 |            0 |          0 |       302.611 |          102 |         1170 |        1094.4 |          1170 |          1170 |     10.514   |                8950.34 |            4.05057 |             15   |     7789.5 |     7789.5 |     7789.5 |       2.4 |       2.4 |       2.4 |
| [qgis322_big > somap322_fix > fg_raster_vector.txt](../results/details/compare-fg-raster-vector-mix/20220919-113744/qgis322_big/somap322_fix/fg_raster_vector.txt/dashboard/index.html)                   | somap_fix > fg_raster_vector.txt        |              5   | +0.0%                    |             281.3 | +55.6%                    |            4.8 | +0.0%                  |           282   | +0.0%                   |            18 |            0 |          0 |       265.611 |          121 |          386 |         369.8 |           386 |           386 |     15.9858  |               15102.5  |            6.04931 |             16.6 |    12850.2 |    12556.3 |    12262.3 |      23.9 |      13.4 |       2.9 |
| [qgis218_big > somap218_fix > fg_raster_vector.txt](../results/details/compare-fg-raster-vector-mix/20220919-113744/qgis218_big/somap218_fix/fg_raster_vector.txt/dashboard/index.html)                   | somap_fix > fg_raster_vector.txt        |             10.8 | +116.0%                  |             180.8 | +0.0%                     |           52.7 | +1002.6%               |          2984   | +958.2%                 |            18 |            0 |          0 |      2928.72  |           76 |         6551 |        6544.7 |          6551 |          6551 |      2.61134 |                2222.98 |            0.98818 |             15   |    11150.3 |    10561.4 |     9712.4 |      62.7 |      41.3 |       3.4 |

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
        - fg_raster_vector.txt

  qgis218_big:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_fix:
        - fg_raster_vector.txt

  qgis322_small:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.22'
    projects:
      somap322_fg_oekorev:
        - fg_raster_vector.txt

  qgis322_big:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.22'
    projects:
      somap322_fix:
        - fg_raster_vector.txt
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
      - fg_raster_vector.txt
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
      - fg_raster_vector.txt
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
      - fg_raster_vector.txt
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
      - fg_raster_vector.txt
    template: docker-compose-qgis-3-nginx

```