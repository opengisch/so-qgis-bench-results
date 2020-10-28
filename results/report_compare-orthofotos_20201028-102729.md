# QGIS Benchmark summary compare-orthofotos (20201028-102729)


compare raster rendering on different version of QGIS servers using the same settings

_run completed in 00h 19m 27s_
## Summary plot
An interactive summary plot can be found [here](report_compare-orthofotos_20201028-102729_plot.html)

## Summary
| name          | group   |   duration s |   medianResTime |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|--------------|-----------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis314-stock | Global  |       1727.5 |           278   |               0   |          5190 |            0 |    11265.8 |     9446.2 |     2455.1 |      91   |      75.2 |      15.1 |          0 |
| qgis218-stock | Global  |       2128.3 |           332   |              23.2 |          5190 |            0 |     8317.9 |     7314.6 |     2542.1 |      99.9 |      99   |      14.4 |          0 |
| qgis310-stock | Global  |       7570.6 |           921.5 |             338.2 |          5190 |            0 |    19112.4 |    16843.3 |     2928.5 |      91.6 |      74.7 |      16.1 |          0 |

## Aggregated
| name                               | group           |   duration s |   medianResTime |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------|-----------------|--------------|-----------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis314-stock > somap314_orthofoto | somap_orthofoto |       1727.5 |           278   |               0   |          5190 |            0 |    11265.8 |     9446.2 |     2455.1 |      91   |      75.2 |      15.1 |          0 |
| qgis218-stock > somap218_orthofoto | somap_orthofoto |       2128.3 |           332   |              23.2 |          5190 |            0 |     8317.9 |     7314.6 |     2542.1 |      99.9 |      99   |      14.4 |          0 |
| qgis310-stock > somap310_orthofoto | somap_orthofoto |       7570.6 |           921.5 |             338.2 |          5190 |            0 |    19112.4 |    16843.3 |     2928.5 |      91.6 |      74.7 |      16.1 |          0 |

## Detail
| name                                                                                                                                                                                      | group                                |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis314-stock > somap314_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201028-102729/qgis314-stock/somap314_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |       1727.5 |               0   |          5190 |            0 |          0 |       332.854 |           278   |            4 |         4538 |         605   |        766    |       1378.09 |     29.8048  |               12094.6  |           11.8255  |           2056.7 |    11265.8 |     9446.2 |     2455.1 |      91   |      75.2 |      15.1 |
| [qgis218-stock > somap218_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201028-102729/qgis218-stock/somap218_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |       2128.3 |              23.2 |          5190 |            0 |          0 |       410.077 |           332   |            3 |         6736 |         650   |        895.25 |       1888.45 |     24.2228  |                9838.73 |            9.61073 |           2058.6 |     8317.9 |     7314.6 |     2542.1 |      99.9 |      99   |      14.4 |
| [qgis310-stock > somap310_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201028-102729/qgis310-stock/somap310_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |       7570.6 |             338.2 |          5190 |            0 |          0 |      1458.69  |           921.5 |            5 |        12592 |        3447.9 |       4152    |       6477.24 |      6.82998 |                2692.11 |            2.70989 |           1997.7 |    19112.4 |    16843.3 |     2928.5 |      91.6 |      74.7 |      16.1 |

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