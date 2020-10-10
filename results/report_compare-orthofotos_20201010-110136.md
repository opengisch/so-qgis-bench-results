# QGIS Benchmark summary compare-orthofotos (20201010-110136)


compare raster rendering on different version of QGIS servers using the same settings

_run completed in 1171.5500000000002s_

## Summary
| name          |   duration s |   penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|---------------|--------------|-------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis314-stock |      1676.49 |        0    |          5191 |            1 |    11912.5 |     9694.2 |      96.9 |      73.8 |       0.02 |
| qgis218-stock |      2160.63 |       28.88 |          5191 |            1 |     9172   |     7798.2 |     100   |      99.1 |       0.02 |
| qgis310-stock |      7620.12 |      354.53 |          5191 |            1 |    20154.2 |    17594.9 |      88.9 |      74.2 |       0.02 |

## Aggregated
| name                               |   duration s |   penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|------------------------------------|--------------|-------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis314-stock > somap314_orthofoto |      1676.49 |        0    |          5191 |            1 |    11912.5 |     9694.2 |      96.9 |      73.8 |       0.02 |
| qgis218-stock > somap218_orthofoto |      2160.63 |       28.88 |          5191 |            1 |     9172   |     7798.2 |     100   |      99.1 |       0.02 |
| qgis310-stock > somap310_orthofoto |      7620.12 |      354.53 |          5191 |            1 |    20154.2 |    17594.9 |      88.9 |      74.2 |       0.02 |

## Detail
| name                                                                                                                                                                                      |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis314-stock > somap314_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201010-110136/qgis314-stock/somap314_orthofoto/orthofotos_big.txt/dashboard/index.html) |      1676.49 |        0    |          5191 |            1 |  0.0192641 |       322.961 |             269 |            3 |         7415 |         588.8 |         743.4 |       1286.84 |     30.7287  |               12467.1  |           12.1918  |          2056.71 |    11912.5 |     9694.2 |     2307.2 |      96.9 |      73.8 |      14.2 |
| [qgis218-stock > somap218_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201010-110136/qgis218-stock/somap218_orthofoto/orthofotos_big.txt/dashboard/index.html) |      2160.63 |       28.88 |          5191 |            1 |  0.0192641 |       416.225 |             329 |            4 |        42705 |         655.8 |         894.2 |       1903.6  |     23.8713  |                9694.09 |            9.47106 |          2058.65 |     9172   |     7798.2 |     2302.9 |     100   |      99.1 |      14   |
| [qgis310-stock > somap310_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201010-110136/qgis310-stock/somap310_orthofoto/orthofotos_big.txt/dashboard/index.html) |      7620.12 |      354.53 |          5191 |            1 |  0.0192641 |      1467.95  |             966 |            5 |        10969 |        3455.2 |        4136.4 |       6582.16 |      6.77252 |                2668.94 |            2.68704 |          1997.74 |    20154.2 |    17594.9 |     2451.9 |      88.9 |      74.2 |      14.7 |

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
    calculate-response-size: yes
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
    calculate-response-size: true
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
    calculate-response-size: true
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
    calculate-response-size: true
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
    calculate-response-size: true
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