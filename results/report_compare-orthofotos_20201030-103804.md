# QGIS Benchmark summary compare-orthofotos (20201030-103804)


compare raster rendering on different version of QGIS servers using the same settings

_run completed in 00h 21m 28s_

_Sample size per configuration 5190_
## Summary plot
An interactive summary plot can be found [here](report_compare-orthofotos_20201030-103804_plot.html)

## Summary
| name          | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-stock | Global  |                194.4 | +0.0%                        |         1862.1 | +0.0%                  |             290 | +0.0%                   |            4 |         5384 |          5190 |            0 |    13208   |    11270.9 |     4136.2 |      89.8 |      74.8 |      38.2 |          0 |
| qgis218-stock | Global  |                234.1 | +20.4%                       |         2263.7 | +21.6%                 |             351 | +21.0%                  |            2 |         7751 |          5190 |            0 |     9721.1 |     8739.2 |     4194.3 |      99.9 |      99.3 |      49.9 |          0 |
| qgis310-stock | Global  |                799.3 | +311.2%                      |         7892.6 | +323.9%                |             983 | +239.0%                 |            6 |        12826 |          5190 |            0 |    20749.4 |    18464.4 |     4314.8 |      89.8 |      74.7 |      42   |          0 |

## Aggregated
| name                               | group           |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------|-----------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-stock > somap316_orthofoto | somap_orthofoto |                194.4 | +0.0%                        |         1862.1 | +0.0%                  |             290 | +0.0%                   |            4 |         5384 |          5190 |            0 |    13208   |    11270.9 |     4136.2 |      89.8 |      74.8 |      38.2 |          0 |
| qgis218-stock > somap218_orthofoto | somap_orthofoto |                234.1 | +20.4%                       |         2263.7 | +21.6%                 |             351 | +21.0%                  |            2 |         7751 |          5190 |            0 |     9721.1 |     8739.2 |     4194.3 |      99.9 |      99.3 |      49.9 |          0 |
| qgis310-stock > somap310_orthofoto | somap_orthofoto |                799.3 | +311.2%                      |         7892.6 | +323.9%                |             983 | +239.0%                 |            6 |        12826 |          5190 |            0 |    20749.4 |    18464.4 |     4314.8 |      89.8 |      74.7 |      42   |          0 |

## Detail
| name                                                                                                                                                                                      | group                                |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316-stock > somap316_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201030-103804/qgis316-stock/somap316_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |                194.4 | +0.0%                        |         1862.1 | +0.0%                  |             290 | +0.0%                   |          5190 |            0 |          0 |       358.786 |            4 |         5384 |         681   |         848   |       1492.26 |     27.6648  |               11226.5  |           10.9764  |           2056.8 |    13208   |    11270.9 |     4136.2 |      89.8 |      74.8 |      38.2 |
| [qgis218-stock > somap218_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201030-103804/qgis218-stock/somap218_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |                234.1 | +20.4%                       |         2263.7 | +21.6%                 |             351 | +21.0%                  |          5190 |            0 |          0 |       436.173 |            2 |         7751 |         692.9 |         937   |       2104.18 |     22.7996  |                9260.65 |            9.04604 |           2058.6 |     9721.1 |     8739.2 |     4194.3 |      99.9 |      99.3 |      49.9 |
| [qgis310-stock > somap310_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201030-103804/qgis310-stock/somap310_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |                799.3 | +311.2%                      |         7892.6 | +323.9%                |             983 | +239.0%                 |          5190 |            0 |          0 |      1520.73  |            6 |        12826 |        3636.7 |        4287.8 |       6709.59 |      6.54693 |                2580.54 |            2.59759 |           1997.7 |    20749.4 |    18464.4 |     4314.8 |      89.8 |      74.7 |      42   |

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

  qgis316-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.16'
    projects:
      somap316_orthofoto:
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
  qgis316-stock:
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
      QGIS_VERSION: '3.16'
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap316_orthofoto:
      - orthofotos_big.txt
    template: docker-compose-qgis-3-nginx

```