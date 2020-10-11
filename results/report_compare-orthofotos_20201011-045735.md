# QGIS Benchmark summary compare-orthofotos (20201011-045735)


compare raster rendering on different version of QGIS servers using the same settings

_run completed in 1159.25s_

## Summary
| name          | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|---------------|---------|--------------|-------------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis314-stock | Global  |      1709.08 |              0    |          5190 |            0 |    11842.6 |     9768.8 |      89.9 |      75.1 |          0 |
| qgis218-stock | Global  |      2103.79 |             23.09 |          5190 |            0 |     8630.5 |     7424.2 |     100   |      99.1 |          0 |
| qgis310-stock | Global  |      7537.29 |            341.01 |          5190 |            0 |    19863.2 |    17222.9 |      90.9 |      74.7 |          0 |

## Aggregated
| name                               | group           |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|------------------------------------|-----------------|--------------|-------------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis314-stock > somap314_orthofoto | somap_orthofoto |      1709.08 |              0    |          5190 |            0 |    11842.6 |     9768.8 |      89.9 |      75.1 |          0 |
| qgis218-stock > somap218_orthofoto | somap_orthofoto |      2103.79 |             23.09 |          5190 |            0 |     8630.5 |     7424.2 |     100   |      99.1 |          0 |
| qgis310-stock > somap310_orthofoto | somap_orthofoto |      7537.29 |            341.01 |          5190 |            0 |    19863.2 |    17222.9 |      90.9 |      74.7 |          0 |

## Detail
| name                                                                                                                                                                                      | group                                |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis314-stock > somap314_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201011-045735/qgis314-stock/somap314_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |      1709.08 |              0    |          5190 |            0 |          0 |       329.302 |           279.5 |            4 |         4606 |         579   |        743    |       1297    |     30.0662  |               12200.7  |           11.9292  |          2056.71 |    11842.6 |     9768.8 |     2620   |      89.9 |      75.1 |      15.1 |
| [qgis218-stock > somap218_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201011-045735/qgis218-stock/somap218_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |      2103.79 |             23.09 |          5190 |            0 |          0 |       405.355 |           330   |            2 |         7535 |         639   |        848.45 |       1963.34 |     24.5263  |                9961.99 |            9.73113 |          2058.65 |     8630.5 |     7424.2 |     2276.1 |     100   |      99.1 |      13.7 |
| [qgis310-stock > somap310_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201011-045735/qgis310-stock/somap310_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |      7537.29 |            341.01 |          5190 |            0 |          0 |      1452.27  |           904.5 |            4 |        11279 |        3465.4 |       4121.9  |       6301.63 |      6.85595 |                2702.33 |            2.72019 |          1997.74 |    19863.2 |    17222.9 |     2548.9 |      90.9 |      74.7 |      15.2 |

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