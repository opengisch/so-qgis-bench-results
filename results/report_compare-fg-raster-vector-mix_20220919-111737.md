# QGIS Benchmark summary compare-fg-raster-vector-mix (20220919-111737)


compare different versions of QGIS servers using the same settings and a working map request

_run completed in 00h 09m 52s_

_Sample size per configuration 18_
## Summary plot
An interactive summary plot can be found [here](report_compare-fg-raster-vector-mix_20220919-111737_plot.html)

## Summary
| name          | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis322_small | Global  |              4.9 | +0.0%                    |               3.2 | +0.0%                     |            4.4 | +0.0%                  |           239.5 | +10.4%                  |          108 |          366 |             16.6 |            18 |            0 |     7370.1 |     7370.1 |     7370.1 |       7.3 |       7.3 |       7.3 |          0 |
| qgis322_big   | Global  |              4.9 | +0.0%                    |             288.3 | +8909.4%                  |            4.9 | +13.5%                 |           276.5 | +27.4%                  |          164 |          383 |             16.6 |            18 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis218_small | Global  |              5.6 | +14.3%                   |               3.6 | +12.5%                    |            5.4 | +23.7%                 |           217   | +0.0%                   |          104 |         1143 |             15   |            18 |            0 |     7153.7 |     7153.7 |     7153.7 |       0.2 |       0.2 |       0.2 |          0 |
| qgis218_big   | Global  |             10.9 | +122.4%                  |             181.3 | +5565.6%                  |           52.6 | +1109.0%               |          2728   | +1157.1%                |           90 |         6961 |             15   |            18 |            0 |    10899.4 |    10320.9 |     9456.4 |      60.7 |      40.7 |       3.4 |          0 |

## Aggregated
| name                                | group            |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------|------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis322_small > somap322_fg_oekorev | somap_fg_oekorev |              4.9 | +0.0%                    |               3.2 | +0.0%                     |            4.4 | +0.0%                  |           239.5 | +10.4%                  |          108 |          366 |             16.6 |            18 |            0 |     7370.1 |     7370.1 |     7370.1 |       7.3 |       7.3 |       7.3 |          0 |
| qgis218_small > somap218_fg_oekorev | somap_fg_oekorev |              5.6 | +14.3%                   |               3.6 | +12.5%                    |            5.4 | +23.7%                 |           217   | +0.0%                   |          104 |         1143 |             15   |            18 |            0 |     7153.7 |     7153.7 |     7153.7 |       0.2 |       0.2 |       0.2 |          0 |
| qgis322_big > somap322_fix          | somap_fix        |              4.9 | +0.0%                    |             288.3 | +59.0%                    |            4.9 | +0.0%                  |           276.5 | +0.0%                   |          164 |          383 |             16.6 |            18 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis218_big > somap218_fix          | somap_fix        |             10.9 | +122.4%                  |             181.3 | +0.0%                     |           52.6 | +965.3%                |          2728   | +886.6%                 |           90 |         6961 |             15   |            18 |            0 |    10899.4 |    10320.9 |     9456.4 |      60.7 |      40.7 |       3.4 |          0 |

## Detail
| name                                                                                                                                                                                                      | group                                   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis322_small > somap322_fg_oekorev > fg_raster_vector.txt](../results/details/compare-fg-raster-vector-mix/20220919-111737/qgis322_small/somap322_fg_oekorev/fg_raster_vector.txt/dashboard/index.html) | somap_fg_oekorev > fg_raster_vector.txt |              4.9 | +0.0%                    |               3.2 | +0.0%                     |            4.4 | +0.0%                  |           239.5 | +10.4%                  |            18 |            0 |          0 |       241.833 |          108 |          366 |         365.1 |           366 |           366 |     19.6078  |               18549.4  |           7.554    |             16.6 |     7370.1 |     7370.1 |     7370.1 |       7.3 |       7.3 |       7.3 |
| [qgis218_small > somap218_fg_oekorev > fg_raster_vector.txt](../results/details/compare-fg-raster-vector-mix/20220919-111737/qgis218_small/somap218_fg_oekorev/fg_raster_vector.txt/dashboard/index.html) | somap_fg_oekorev > fg_raster_vector.txt |              5.6 | +14.3%                   |               3.6 | +12.5%                    |            5.4 | +23.7%                 |           217   | +0.0%                   |            18 |            0 |          0 |       299.111 |          104 |         1143 |        1081.8 |          1143 |          1143 |     10.5758  |                9002.93 |           4.07437  |             15   |     7153.7 |     7153.7 |     7153.7 |       0.2 |       0.2 |       0.2 |
| [qgis322_big > somap322_fix > fg_raster_vector.txt](../results/details/compare-fg-raster-vector-mix/20220919-111737/qgis322_big/somap322_fix/fg_raster_vector.txt/dashboard/index.html)                   | somap_fix > fg_raster_vector.txt        |              4.9 | +0.0%                    |             288.3 | +59.0%                    |            4.9 | +0.0%                  |           276.5 | +0.0%                   |            18 |            0 |          0 |       274.444 |          164 |          383 |         363.2 |           383 |           383 |     17.2911  |               16335.6  |           6.54325  |             16.6 |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis218_big > somap218_fix > fg_raster_vector.txt](../results/details/compare-fg-raster-vector-mix/20220919-111737/qgis218_big/somap218_fix/fg_raster_vector.txt/dashboard/index.html)                   | somap_fix > fg_raster_vector.txt        |             10.9 | +122.4%                  |             181.3 | +0.0%                     |           52.6 | +965.3%                |          2728   | +886.6%                 |            18 |            0 |          0 |      2923.78  |           90 |         6961 |        6574   |          6961 |          6961 |      2.53879 |                2161.21 |           0.960723 |             15   |    10899.4 |    10320.9 |     9456.4 |      60.7 |      40.7 |       3.4 |

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