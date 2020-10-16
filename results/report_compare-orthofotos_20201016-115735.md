# QGIS Benchmark summary compare-orthofotos (20201016-115735)


compare raster rendering on different version of QGIS servers using the same settings

_run completed in 00h 20m 18s_
## Summary plot
An interactive summary plot can be found [here](report_compare-orthofotos_20201016-115735_plot.html)

## Summary
| name          | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis314-stock | Global  |       1779.9 |               0   |          5190 |            0 |    11762   |     9800.7 |     2723.3 |      91.4 |      75.3 |      15.5 |          0 |
| qgis218-stock | Global  |       2263.5 |              27.2 |          5190 |            0 |     8627.8 |     7518.4 |     2400.1 |     100   |      99   |      13.5 |          0 |
| qgis310-stock | Global  |       7886.8 |             343.1 |          5190 |            0 |    20490.2 |    17692.2 |     2640.6 |      89.6 |      74.7 |      16.5 |          0 |

## Aggregated
| name                               | group           |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------|-----------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis314-stock > somap314_orthofoto | somap_orthofoto |       1779.9 |               0   |          5190 |            0 |    11762   |     9800.7 |     2723.3 |      91.4 |      75.3 |      15.5 |          0 |
| qgis218-stock > somap218_orthofoto | somap_orthofoto |       2263.5 |              27.2 |          5190 |            0 |     8627.8 |     7518.4 |     2400.1 |     100   |      99   |      13.5 |          0 |
| qgis310-stock > somap310_orthofoto | somap_orthofoto |       7886.8 |             343.1 |          5190 |            0 |    20490.2 |    17692.2 |     2640.6 |      89.6 |      74.7 |      16.5 |          0 |

## Detail
| name                                                                                                                                                                                      | group                                |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis314-stock > somap314_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201016-115735/qgis314-stock/somap314_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |       1779.9 |               0   |          5190 |            0 |          0 |       342.956 |           284.5 |            6 |         5157 |         617.9 |        812.45 |       1384.32 |     28.9256  |               11737.8  |           11.4766  |           2056.7 |    11762   |     9800.7 |     2723.3 |      91.4 |      75.3 |      15.5 |
| [qgis218-stock > somap218_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201016-115735/qgis218-stock/somap218_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |       2263.5 |              27.2 |          5190 |            0 |          0 |       436.128 |           351   |            2 |         7622 |         692.8 |        945.45 |       2218    |     22.7921  |                9257.64 |            9.0431  |           2058.6 |     8627.8 |     7518.4 |     2400.1 |     100   |      99   |      13.5 |
| [qgis310-stock > somap310_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201016-115735/qgis310-stock/somap310_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |       7886.8 |             343.1 |          5190 |            0 |          0 |      1519.61  |           980.5 |            8 |        14126 |        3583.6 |       4301.45 |       6821.16 |      6.55441 |                2583.48 |            2.60055 |           1997.7 |    20490.2 |    17692.2 |     2640.6 |      89.6 |      74.7 |      16.5 |

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