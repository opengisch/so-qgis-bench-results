# QGIS Benchmark summary compare-rulebased (20201009-141339)


compare rulebased rendering on different version of QGIS servers using the same settings

_run completed in 516.4s_

## Summary
| name          |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|---------------|--------------|-------------|---------------|--------------|------------|
| qgis218-stock |      1323.8  |        0    |          5191 |            1 |       0.02 |
| qgis314-stock |      1791.81 |       35.35 |          5191 |            1 |       0.02 |
| qgis310-stock |      1801.89 |       36.11 |          5191 |            1 |       0.02 |

## Aggregated
| name                                             |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|--------------------------------------------------|--------------|-------------|---------------|--------------|------------|
| qgis218-stock > somap218_avbobe_farbig_rulebased |      1323.8  |        0    |          5191 |            1 |       0.02 |
| qgis314-stock > somap314_avbobe_farbig_rulebased |      1791.81 |       35.35 |          5191 |            1 |       0.02 |
| qgis310-stock > somap310_avbobe_farbig_rulebased |      1801.89 |       36.11 |          5191 |            1 |       0.02 |

## Detail
| name                                                                                                                                                                                                                         |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|
| [qgis218-stock > somap218_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201009-141339/qgis218-stock/somap218_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) |      1323.8  |        0    |          5191 |            1 |  0.0192641 |       255.018 |             145 |           28 |        90045 |           559 |         659.4 |        970.08 |      38.3119 |                7319.42 |            17.2009 |
| [qgis314-stock > somap314_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201009-141339/qgis314-stock/somap314_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) |      1791.81 |       35.35 |          5191 |            1 |  0.0192641 |       345.177 |             243 |           27 |         2295 |           747 |         945   |       1332.36 |      28.8309 |                5503.43 |            12.9442 |
| [qgis310-stock > somap310_avbobe_farbig_rulebased > bodenbedeckung_big.txt](../results/details/compare-rulebased/20201009-141339/qgis310-stock/somap310_avbobe_farbig_rulebased/bodenbedeckung_big.txt/dashboard/index.html) |      1801.89 |       36.11 |          5191 |            1 |  0.0192641 |       347.118 |             261 |           29 |         2448 |           726 |         893.4 |       1263.4  |      28.655  |                5470.03 |            12.8653 |

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