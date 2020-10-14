# QGIS Benchmark summary compare-orthofotos (20201014-082559)


compare raster rendering on different version of QGIS servers using the same settings

_run completed in 00h 19m 38s_
## Summary plot
An interactive summary plot can be found [here](report_compare-orthofotos_20201014-082559_plot.html)

## Summary
| name          | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis314-stock | Global  |       1719.4 |               0   |          5190 |            0 |    11877.1 |     9898.9 |     2768.1 |      85.3 |      75.6 |      15   |          0 |
| qgis218-stock | Global  |       2170.2 |              26.2 |          5190 |            0 |     8251.2 |     7276.7 |     2747.8 |      99.9 |      99.1 |      12.9 |          0 |
| qgis310-stock | Global  |       7646.9 |             344.8 |          5190 |            0 |    19468.3 |    17148.9 |     2970.2 |      89.3 |      74.7 |      16.7 |          0 |

## Aggregated
| name                               | group           |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------|-----------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis314-stock > somap314_orthofoto | somap_orthofoto |       1719.4 |               0   |          5190 |            0 |    11877.1 |     9898.9 |     2768.1 |      85.3 |      75.6 |      15   |          0 |
| qgis218-stock > somap218_orthofoto | somap_orthofoto |       2170.2 |              26.2 |          5190 |            0 |     8251.2 |     7276.7 |     2747.8 |      99.9 |      99.1 |      12.9 |          0 |
| qgis310-stock > somap310_orthofoto | somap_orthofoto |       7646.9 |             344.8 |          5190 |            0 |    19468.3 |    17148.9 |     2970.2 |      89.3 |      74.7 |      16.7 |          0 |

## Detail
| name                                                                                                                                                                                      | group                                |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis314-stock > somap314_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201014-082559/qgis314-stock/somap314_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |       1719.4 |               0   |          5190 |            0 |          0 |       331.284 |           272   |            6 |         5928 |         591   |        756.45 |       1365.17 |      29.9463 |               12152.1  |           11.8816  |           2056.7 |    11877.1 |     9898.9 |     2768.1 |      85.3 |      75.6 |      15   |
| [qgis218-stock > somap218_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201014-082559/qgis218-stock/somap218_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |       2170.2 |              26.2 |          5190 |            0 |          0 |       418.145 |           333.5 |            3 |         7663 |         662.9 |        890.9  |       2027.81 |      23.773  |                9656.03 |            9.43227 |           2058.6 |     8251.2 |     7276.7 |     2747.8 |      99.9 |      99.1 |      12.9 |
| [qgis310-stock > somap310_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201014-082559/qgis310-stock/somap310_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |       7646.9 |             344.8 |          5190 |            0 |          0 |      1473.4   |           933   |            6 |        13626 |        3470.7 |       4185.9  |       6473.91 |       6.7556 |                2662.78 |            2.68038 |           1997.7 |    19468.3 |    17148.9 |     2970.2 |      89.3 |      74.7 |      16.7 |

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