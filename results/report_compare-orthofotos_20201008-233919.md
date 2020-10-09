# QGIS Benchmark summary compare-orthofotos (20201008-233919)

_run completed in 34.78s_

## Summary
| name          |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|---------------|--------------|-------------|---------------|--------------|------------|
| qgis218-stock |        23.48 |        0    |          5191 |         5191 |        100 |
| qgis314-stock |        56.99 |      142.72 |          5191 |         5191 |        100 |
| qgis310-stock |        58.72 |      150.09 |          5191 |         5191 |        100 |

## Aggregated
| name                                   |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|----------------------------------------|--------------|-------------|---------------|--------------|------------|
| qgis218-stock > somap218_orthofoto.qgs |        23.48 |        0    |          5191 |         5191 |        100 |
| qgis314-stock > somap314_orthofoto.qgs |        56.99 |      142.72 |          5191 |         5191 |        100 |
| qgis310-stock > somap310_orthofoto.qgs |        58.72 |      150.09 |          5191 |         5191 |        100 |

## Detail
| name                                                                                                                                                                                              |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|
| [qgis218-stock > somap218_orthofoto.qgs > orthofotos_big.txt](../results/details/compare-orthofotos/20201008-233919/qgis218-stock/somap218_orthofoto.qgs/orthofotos_big.txt/dashboard/index.html) |        23.48 |        0    |          5191 |         5191 |        100 |       4.52321 |               2 |            1 |         1274 |             3 |             4 |             9 |     1451.62  |                705.399 |            581.61  |
| [qgis314-stock > somap314_orthofoto.qgs > orthofotos_big.txt](../results/details/compare-orthofotos/20201008-233919/qgis314-stock/somap314_orthofoto.qgs/orthofotos_big.txt/dashboard/index.html) |        56.99 |      142.72 |          5191 |         5191 |        100 |      10.9778  |              11 |            5 |           76 |            16 |            18 |            22 |      843.516 |                284.155 |            337.965 |
| [qgis310-stock > somap310_orthofoto.qgs > orthofotos_big.txt](../results/details/compare-orthofotos/20201008-233919/qgis310-stock/somap310_orthofoto.qgs/orthofotos_big.txt/dashboard/index.html) |        58.72 |      150.09 |          5191 |         5191 |        100 |      11.3123  |              11 |            5 |           75 |            17 |            19 |            23 |      816.195 |                197.636 |            327.018 |

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
description: 'compare raster rendering on different version of QGIS servers using the same settings'

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
      somap218_orthofoto.qgs:
        - orthofotos_big.txt

  qgis310-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_orthofoto.qgs:
        - orthofotos_big.txt

  qgis314-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_orthofoto.qgs:
        - orthofotos_big.txt

```
### parsed test configurations

```
description: compare raster rendering on different version of QGIS servers using the
  same settings
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
      somap218_orthofoto.qgs:
      - orthofotos_big.txt
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
      somap310_orthofoto.qgs:
      - orthofotos_big.txt
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
      somap314_orthofoto.qgs:
      - orthofotos_big.txt
    template: docker-compose-qgis-3-nginx

```