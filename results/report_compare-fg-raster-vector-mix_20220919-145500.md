# QGIS Benchmark summary compare-fg-raster-vector-mix (20220919-145500)


compare different versions of QGIS servers using the same settings and a working map request

_run completed in 00h 09m 21s_

_Sample size per configuration 18_
## Summary plot
An interactive summary plot can be found [here](report_compare-fg-raster-vector-mix_20220919-145500_plot.html)

## Summary
| name          | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis322_small | Global  |              4.7 | +0.0%                    |               3.2 | +0.0%                     |            4.3 | +0.0%                  |           246.5 | +10.3%                  |           96 |          360 |             16.6 |            18 |            0 |     7078.8 |     6889.4 |     6700   |      25.5 |      15.9 |       6.2 |          0 |
| qgis322_big   | Global  |              5   | +6.4%                    |             289.5 | +8946.9%                  |            4.7 | +8.9%                  |           261   | +16.8%                  |          116 |          358 |             16.6 |            18 |            0 |    11936.1 |    11936.1 |    11936.1 |       2.8 |       2.8 |       2.8 |          0 |
| qgis218_small | Global  |              5.6 | +19.1%                   |               3.5 | +9.4%                     |            5.3 | +22.9%                 |           223.5 | +0.0%                   |           68 |         1132 |             15   |            18 |            0 |     6706.7 |     6326.8 |     5947   |      21.6 |      11   |       0.3 |          0 |
| qgis218_big   | Global  |             10.9 | +131.9%                  |             179   | +5493.8%                  |           52.8 | +1119.2%               |          2510   | +1023.0%                |           78 |         6938 |             15   |            18 |            0 |    10411.7 |     9851.2 |     8972.2 |      59.9 |      40   |       3.3 |          0 |

## Aggregated
| name                                | group            |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------|------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis322_small > somap322_fg_oekorev | somap_fg_oekorev |              4.7 | +0.0%                    |               3.2 | +0.0%                     |            4.3 | +0.0%                  |           246.5 | +10.3%                  |           96 |          360 |             16.6 |            18 |            0 |     7078.8 |     6889.4 |     6700   |      25.5 |      15.9 |       6.2 |          0 |
| qgis218_small > somap218_fg_oekorev | somap_fg_oekorev |              5.6 | +19.1%                   |               3.5 | +9.4%                     |            5.3 | +22.9%                 |           223.5 | +0.0%                   |           68 |         1132 |             15   |            18 |            0 |     6706.7 |     6326.8 |     5947   |      21.6 |      11   |       0.3 |          0 |
| qgis322_big > somap322_fix          | somap_fix        |              5   | +0.0%                    |             289.5 | +61.7%                    |            4.7 | +0.0%                  |           261   | +0.0%                   |          116 |          358 |             16.6 |            18 |            0 |    11936.1 |    11936.1 |    11936.1 |       2.8 |       2.8 |       2.8 |          0 |
| qgis218_big > somap218_fix          | somap_fix        |             10.9 | +118.0%                  |             179   | +0.0%                     |           52.8 | +1019.2%               |          2510   | +861.7%                 |           78 |         6938 |             15   |            18 |            0 |    10411.7 |     9851.2 |     8972.2 |      59.9 |      40   |       3.3 |          0 |

## Detail
| name                                                                                                                                                                                                      | group                                   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis322_small > somap322_fg_oekorev > fg_raster_vector.txt](../results/details/compare-fg-raster-vector-mix/20220919-145500/qgis322_small/somap322_fg_oekorev/fg_raster_vector.txt/dashboard/index.html) | somap_fg_oekorev > fg_raster_vector.txt |              4.7 | +0.0%                    |               3.2 | +0.0%                     |            4.3 | +0.0%                  |           246.5 | +10.3%                  |            18 |            0 |          0 |       240.611 |           96 |          360 |         350.1 |           360 |           360 |     19.9336  |               18857.5  |           7.67948  |             16.6 |     7078.8 |     6889.4 |     6700   |      25.5 |      15.9 |       6.2 |
| [qgis218_small > somap218_fg_oekorev > fg_raster_vector.txt](../results/details/compare-fg-raster-vector-mix/20220919-145500/qgis218_small/somap218_fg_oekorev/fg_raster_vector.txt/dashboard/index.html) | somap_fg_oekorev > fg_raster_vector.txt |              5.6 | +19.1%                   |               3.5 | +9.4%                     |            5.3 | +22.9%                 |           223.5 | +0.0%                   |            18 |            0 |          0 |       295.778 |           68 |         1132 |        1124.8 |          1132 |          1132 |     10.3034  |                8771.03 |           3.96942  |             15   |     6706.7 |     6326.8 |     5947   |      21.6 |      11   |       0.3 |
| [qgis322_big > somap322_fix > fg_raster_vector.txt](../results/details/compare-fg-raster-vector-mix/20220919-145500/qgis322_big/somap322_fix/fg_raster_vector.txt/dashboard/index.html)                   | somap_fix > fg_raster_vector.txt        |              5   | +0.0%                    |             289.5 | +61.7%                    |            4.7 | +0.0%                  |           261   | +0.0%                   |            18 |            0 |          0 |       262.111 |          116 |          358 |         344.5 |           358 |           358 |     17.6471  |               16672    |           6.67796  |             16.6 |    11936.1 |    11936.1 |    11936.1 |       2.8 |       2.8 |       2.8 |
| [qgis218_big > somap218_fix > fg_raster_vector.txt](../results/details/compare-fg-raster-vector-mix/20220919-145500/qgis218_big/somap218_fix/fg_raster_vector.txt/dashboard/index.html)                   | somap_fix > fg_raster_vector.txt        |             10.9 | +118.0%                  |             179   | +0.0%                     |           52.8 | +1019.2%               |          2510   | +861.7%                 |            18 |            0 |          0 |      2933.44  |           78 |         6938 |        6916.4 |          6938 |          6938 |      2.54921 |                2170.09 |           0.964668 |             15   |    10411.7 |     9851.2 |     8972.2 |      59.9 |      40   |       3.3 |

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