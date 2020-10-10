# QGIS Benchmark summary compare-rulebased (20201010-112207)


compare rulebased rendering on different version of QGIS servers using the same settings

_run completed in 514.01s_

## Summary
| name          |   duration s |   penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|---------------|--------------|-------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis218-stock |      1301.13 |        0    |          5191 |            1 |     8065   |     6025.7 |      99.9 |      96.6 |       0.02 |
| qgis314-stock |      1776.49 |       36.53 |          5191 |            1 |     6674.4 |     5099.8 |      88.6 |      73.1 |       0.02 |
| qgis310-stock |      1801.29 |       38.44 |          5191 |            1 |     6671.4 |     5101.2 |      84.7 |      71.5 |       0.02 |

## Aggregated
| name                                             |   duration s |   penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|--------------------------------------------------|--------------|-------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis218-stock > somap218_avbobe_farbig_rulebased |      1301.13 |        0    |          5191 |            1 |     8065   |     6025.7 |      99.9 |      96.6 |       0.02 |
| qgis314-stock > somap314_avbobe_farbig_rulebased |      1776.49 |       36.53 |          5191 |            1 |     6674.4 |     5099.8 |      88.6 |      73.1 |       0.02 |
| qgis310-stock > somap310_avbobe_farbig_rulebased |      1801.29 |       38.44 |          5191 |            1 |     6671.4 |     5101.2 |      84.7 |      71.5 |       0.02 |

## Detail
| name                                                                                                                                                                                                                         |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201010-112207/qgis218-stock/somap218_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) |      1301.13 |        0    |          5191 |            1 |  0.0192641 |       250.651 |             141 |           28 |        90091 |         553   |         659   |        925.32 |      38.5965 |                7373.79 |            17.3287 |     8065   |     6025.7 |     2317.8 |      99.9 |      96.6 |      12.5 |
| [qgis314-stock > somap314_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201010-112207/qgis314-stock/somap314_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) |      1776.49 |       36.53 |          5191 |            1 |  0.0192641 |       342.225 |             266 |           29 |         1814 |         713.8 |         869.2 |       1179.08 |      28.9402 |                5524.3  |            12.9933 |     6674.4 |     5099.8 |     2415   |      88.6 |      73.1 |      14.9 |
| [qgis310-stock > somap310_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201010-112207/qgis310-stock/somap310_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) |      1801.29 |       38.44 |          5191 |            1 |  0.0192641 |       347.002 |             264 |           28 |         2237 |         732   |         927.4 |       1323.32 |      28.5545 |                5450.83 |            12.8201 |     6671.4 |     5101.2 |     2331.8 |      84.7 |      71.5 |      14.6 |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/ubuntu/so-qgis-bench/logs/prepared
parallel-requests: 10
reports-dir: ./reports/
result-dir: /home/ubuntu/so-qgis-bench/results

```
### test configurations

```
description: 'compare rulebased rendering on different version of QGIS servers using the same settings'

test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '6'
      QGIS_MAX_CACHE_LAYERS: '50'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_SERVER_MAX_THREADS: '1' #QGIS3
      QGIS_FCGI_PROCESSES: '1' #QGIS2

      PG_SERVICE: 'pg_service.conf'


  qgis218-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_avbobe_farbig_rulebased:
        - bodenbedeckung_big.txt

  qgis310-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_avbobe_farbig_rulebased:
        - bodenbedeckung_big.txt

  qgis314-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_avbobe_farbig_rulebased:
        - bodenbedeckung_big.txt

```
### parsed test configurations

```
description: compare rulebased rendering on different version of QGIS servers using
  the same settings
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '50'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
  qgis218-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '50'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
    inherit: base
    path-prefix: ows
    projects:
      somap218_avbobe_farbig_rulebased:
      - bodenbedeckung_big.txt
    template: docker-compose-qgis-2
  qgis310-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '50'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.10'
    inherit: base
    path-prefix: ogc
    projects:
      somap310_avbobe_farbig_rulebased:
      - bodenbedeckung_big.txt
    template: docker-compose-qgis-3-nginx
  qgis314-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '50'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.14'
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap314_avbobe_farbig_rulebased:
      - bodenbedeckung_big.txt
    template: docker-compose-qgis-3-nginx

```