# QGIS Benchmark summary compare-orthofotos (20201012-084959)


compare raster rendering on different version of QGIS servers using the same settings

_run completed in 00h 20m 20s_
## Summary plot
An interactive summary plot can be found [here](report_compare-orthofotos_20201012-084959_plot.html)

## Summary
| name          | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMinMB |   memMaxMB |   memAvgMB |   cpuMin% |   cpuMax% |   cpuAvg% |   errorPct |
|---------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis314-stock | Global  |       1818.2 |               0   |          5190 |            0 |     2853.2 |    11809.2 |     9898.9 |      16.3 |      97.9 |      75.2 |          0 |
| qgis218-stock | Global  |       2229.1 |              22.6 |          5190 |            0 |     2387.3 |     8610.8 |     7493.7 |      13.6 |      99.9 |      99   |          0 |
| qgis310-stock | Global  |       7914.6 |             335.3 |          5190 |            0 |     2882.1 |    19952.4 |    17630   |      16.1 |      94.6 |      74.6 |          0 |

## Aggregated
| name                               | group           |   duration s |   group penalty % |   sampleCount |   errorCount |   memMinMB |   memMaxMB |   memAvgMB |   cpuMin% |   cpuMax% |   cpuAvg% |   errorPct |
|------------------------------------|-----------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis314-stock > somap314_orthofoto | somap_orthofoto |       1818.2 |               0   |          5190 |            0 |     2853.2 |    11809.2 |     9898.9 |      16.3 |      97.9 |      75.2 |          0 |
| qgis218-stock > somap218_orthofoto | somap_orthofoto |       2229.1 |              22.6 |          5190 |            0 |     2387.3 |     8610.8 |     7493.7 |      13.6 |      99.9 |      99   |          0 |
| qgis310-stock > somap310_orthofoto | somap_orthofoto |       7914.6 |             335.3 |          5190 |            0 |     2882.1 |    19952.4 |    17630   |      16.1 |      94.6 |      74.6 |          0 |

## Detail
| name                                                                                                                                                                                      | group                                |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis314-stock > somap314_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201012-084959/qgis314-stock/somap314_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |       1818.2 |               0   |          5190 |            0 |          0 |       350.329 |           274.5 |            6 |         4891 |         670   |        854    |       1505.9  |     28.2882  |               11479.2  |           11.2237  |           2056.7 |    11809.2 |     9898.9 |     2853.2 |      97.9 |      75.2 |      16.3 |
| [qgis218-stock > somap218_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201012-084959/qgis218-stock/somap218_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |       2229.1 |              22.6 |          5190 |            0 |          0 |       429.504 |           344   |            2 |         8197 |         675.9 |        942.45 |       2086.9  |     23.1554  |                9405.17 |            9.18722 |           2058.6 |     8610.8 |     7493.7 |     2387.3 |      99.9 |      99   |      13.6 |
| [qgis310-stock > somap310_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201012-084959/qgis310-stock/somap310_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |       7914.6 |             335.3 |          5190 |            0 |          0 |      1524.96  |          1018.5 |            5 |        13544 |        3569   |       4310    |       6755.64 |      6.53274 |                2574.94 |            2.59196 |           1997.7 |    19952.4 |    17630   |     2882.1 |      94.6 |      74.6 |      16.1 |

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