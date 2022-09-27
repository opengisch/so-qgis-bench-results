# QGIS Benchmark summary compare-fg-raster-vector-mix (20220919-115219)


compare different versions of QGIS servers using the same settings and a working map request

_run completed in 00h 08m 43s_

_Sample size per configuration 18_
## Summary plot
An interactive summary plot can be found [here](report_compare-fg-raster-vector-mix_20220919-115219_plot.html)

## Summary
| name          | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis322_small | Global  |              4.9 | +0.0%                    |               3.3 | +0.0%                     |            4.3 | +0.0%                  |           245.5 | +8.1%                   |           77 |          360 |             16.6 |            18 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis218_small | Global  |              5.7 | +16.3%                   |               3.5 | +6.1%                     |            5.4 | +23.8%                 |           227   | +0.0%                   |           72 |         1131 |             15   |            18 |            0 |     8178.7 |     8178.7 |     8178.7 |       1.9 |       1.9 |       1.9 |          0 |
| qgis218_big   | Global  |             10.3 | +110.2%                  |             163   | +4839.4%                  |           37.4 | +764.3%                |           849.5 | +274.2%                 |          106 |         6151 |             15   |            18 |            0 |    10996.5 |    10386.5 |     9244.7 |      48   |      29.6 |       3.5 |          0 |
| qgis322_big   | Global  |             33.2 | +577.6%                  |             240.6 | +7190.9%                  |           62   | +1334.0%               |           278.5 | +22.7%                  |           90 |        29131 |             16.6 |            18 |            0 |    12834.2 |    12772.7 |    12234   |      14.4 |       2.7 |       1.9 |          0 |

## Aggregated
| name                                | group            |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------|------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis322_small > somap322_fg_oekorev | somap_fg_oekorev |              4.9 | +0.0%                    |               3.3 | +0.0%                     |            4.3 | +0.0%                  |           245.5 | +8.1%                   |           77 |          360 |             16.6 |            18 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis218_small > somap218_fg_oekorev | somap_fg_oekorev |              5.7 | +16.3%                   |               3.5 | +6.1%                     |            5.4 | +23.8%                 |           227   | +0.0%                   |           72 |         1131 |             15   |            18 |            0 |     8178.7 |     8178.7 |     8178.7 |       1.9 |       1.9 |       1.9 |          0 |
| qgis218_big > somap218_fix          | somap_fix        |             10.3 | +0.0%                    |             163   | +0.0%                     |           37.4 | +0.0%                  |           849.5 | +205.0%                 |          106 |         6151 |             15   |            18 |            0 |    10996.5 |    10386.5 |     9244.7 |      48   |      29.6 |       3.5 |          0 |
| qgis322_big > somap322_fix          | somap_fix        |             33.2 | +222.3%                  |             240.6 | +47.6%                    |           62   | +65.9%                 |           278.5 | +0.0%                   |           90 |        29131 |             16.6 |            18 |            0 |    12834.2 |    12772.7 |    12234   |      14.4 |       2.7 |       1.9 |          0 |

## Detail
| name                                                                                                                                                                                                      | group                                   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis322_small > somap322_fg_oekorev > fg_raster_vector.txt](../results/details/compare-fg-raster-vector-mix/20220919-115219/qgis322_small/somap322_fg_oekorev/fg_raster_vector.txt/dashboard/index.html) | somap_fg_oekorev > fg_raster_vector.txt |              4.9 | +0.0%                    |               3.3 | +0.0%                     |            4.3 | +0.0%                  |           245.5 | +8.1%                   |            18 |            0 |          0 |       240.111 |           77 |          360 |         346.5 |           360 |           360 |    19.1286   |              18096     |           7.36936  |             16.6 |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis218_small > somap218_fg_oekorev > fg_raster_vector.txt](../results/details/compare-fg-raster-vector-mix/20220919-115219/qgis218_small/somap218_fg_oekorev/fg_raster_vector.txt/dashboard/index.html) | somap_fg_oekorev > fg_raster_vector.txt |              5.7 | +16.3%                   |               3.5 | +6.1%                     |            5.4 | +23.8%                 |           227   | +0.0%                   |            18 |            0 |          0 |       297.333 |           72 |         1131 |        1123.8 |          1131 |          1131 |    10.3034   |               8771.03  |           3.96942  |             15   |     8178.7 |     8178.7 |     8178.7 |       1.9 |       1.9 |       1.9 |
| [qgis218_big > somap218_fix > fg_raster_vector.txt](../results/details/compare-fg-raster-vector-mix/20220919-115219/qgis218_big/somap218_fix/fg_raster_vector.txt/dashboard/index.html)                   | somap_fix > fg_raster_vector.txt        |             10.3 | +0.0%                    |             163   | +0.0%                     |           37.4 | +0.0%                  |           849.5 | +205.0%                 |            18 |            0 |          0 |      2075.17  |          106 |         6151 |        6098.8 |          6151 |          6151 |     2.82132  |               2401.72  |           1.06764  |             15   |    10996.5 |    10386.5 |     9244.7 |      48   |      29.6 |       3.5 |
| [qgis322_big > somap322_fix > fg_raster_vector.txt](../results/details/compare-fg-raster-vector-mix/20220919-115219/qgis322_big/somap322_fix/fg_raster_vector.txt/dashboard/index.html)                   | somap_fix > fg_raster_vector.txt        |             33.2 | +222.3%                  |             240.6 | +47.6%                    |           62   | +65.9%                 |           278.5 | +0.0%                   |            18 |            0 |          0 |      3443.17  |           90 |        29131 |       28882.6 |         29131 |         29131 |     0.612537 |                578.691 |           0.231795 |             16.6 |    12834.2 |    12772.7 |    12234   |      14.4 |       2.7 |       1.9 |

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