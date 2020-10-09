# QGIS Benchmark summary compare-orthofotos (20201009-132855)


compare raster rendering on different version of QGIS servers using the same settings

_run completed in 2632.38s_

## Summary
| name          |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|---------------|--------------|-------------|---------------|--------------|------------|
| qgis310-stock |      7835.6  |        0    |          5191 |            1 |       0.02 |
| qgis314-stock |      7932.08 |        1.23 |          5191 |            1 |       0.02 |
| qgis218-stock |     10289.6  |       31.32 |          5191 |            1 |       0.02 |

## Aggregated
| name                               |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |
|------------------------------------|--------------|-------------|---------------|--------------|------------|
| qgis310-stock > somap310_orthofoto |      7835.6  |        0    |          5191 |            1 |       0.02 |
| qgis314-stock > somap314_orthofoto |      7932.08 |        1.23 |          5191 |            1 |       0.02 |
| qgis218-stock > somap218_orthofoto |     10289.6  |       31.32 |          5191 |            1 |       0.02 |

## Detail
| name                                                                                                                                                                                      |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|
| [qgis310-stock > somap310_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201009-132855/qgis310-stock/somap310_orthofoto/orthofotos_big.txt/dashboard/index.html) |      7835.6  |        0    |          5191 |            1 |  0.0192641 |       1509.46 |            1030 |            5 |        12890 |        3578   |        4221.8 |       6430.12 |      6.60609 |                2602.22 |            2.621   |
| [qgis314-stock > somap314_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201009-132855/qgis314-stock/somap314_orthofoto/orthofotos_big.txt/dashboard/index.html) |      7932.08 |        1.23 |          5191 |            1 |  0.0192641 |       1528.05 |            1007 |            3 |        12320 |        3648.8 |        4403.4 |       6683.56 |      6.52413 |                2569.89 |            2.58848 |
| [qgis218-stock > somap218_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201009-132855/qgis218-stock/somap218_orthofoto/orthofotos_big.txt/dashboard/index.html) |     10289.6  |       31.32 |          5191 |            1 |  0.0192641 |       1982.19 |             842 |            3 |        90091 |        5928.8 |        6507   |       9364    |      5.02961 |                1993.25 |            1.99553 |

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
      somap218_orthofoto:
        - orthofotos_big.txt

  qgis310-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_orthofoto:
        - orthofotos_big.txt

  qgis314-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_orthofoto:
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
      somap218_orthofoto:
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
      somap310_orthofoto:
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
      somap314_orthofoto:
      - orthofotos_big.txt
    template: docker-compose-qgis-3-nginx

```