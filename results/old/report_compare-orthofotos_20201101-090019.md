# QGIS Benchmark summary compare-orthofotos (20201101-090019)


compare raster rendering on different version of QGIS servers using the same settings

_run completed in 00h 20m 59s_

_Sample size per configuration 5190_
## Summary plot
An interactive summary plot can be found [here](report_compare-orthofotos_20201101-090019_plot.html)

## Summary
| name          | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-stock | Global  |                189.7 | +0.0%                        |         1814.5 | +0.0%                  |           287   | +0.0%                   |            5 |         7425 |          5190 |            0 |    13858.5 |    12003.6 |     4846.1 |      87.2 |      75.4 |      37   |          0 |
| qgis218-stock | Global  |                229.1 | +20.8%                       |         2217.2 | +22.2%                 |           344   | +19.9%                  |            2 |         8040 |          5190 |            0 |    10184.3 |     9296.3 |     4946.7 |      99.9 |      99.3 |      49.4 |          0 |
| qgis310-stock | Global  |                782   | +312.2%                      |         7729.5 | +326.0%                |           948.5 | +230.5%                 |            5 |        11206 |          5190 |            0 |    21359.7 |    19044.6 |     4939.7 |      99   |      74.7 |      34.7 |          0 |

## Aggregated
| name                               | group           |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------|-----------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-stock > somap316_orthofoto | somap_orthofoto |                189.7 | +0.0%                        |         1814.5 | +0.0%                  |           287   | +0.0%                   |            5 |         7425 |          5190 |            0 |    13858.5 |    12003.6 |     4846.1 |      87.2 |      75.4 |      37   |          0 |
| qgis218-stock > somap218_orthofoto | somap_orthofoto |                229.1 | +20.8%                       |         2217.2 | +22.2%                 |           344   | +19.9%                  |            2 |         8040 |          5190 |            0 |    10184.3 |     9296.3 |     4946.7 |      99.9 |      99.3 |      49.4 |          0 |
| qgis310-stock > somap310_orthofoto | somap_orthofoto |                782   | +312.2%                      |         7729.5 | +326.0%                |           948.5 | +230.5%                 |            5 |        11206 |          5190 |            0 |    21359.7 |    19044.6 |     4939.7 |      99   |      74.7 |      34.7 |          0 |

## Detail
| name                                                                                                                                                                                      | group                                |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316-stock > somap316_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201101-090019/qgis316-stock/somap316_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |                189.7 | +0.0%                        |         1814.5 | +0.0%                  |           287   | +0.0%                   |          5190 |            0 |          0 |       349.609 |            5 |         7425 |         646.9 |        824.45 |       1332.63 |     28.3585  |               11508    |           11.2516  |           2056.8 |    13858.5 |    12003.6 |     4846.1 |      87.2 |      75.4 |      37   |
| [qgis218-stock > somap218_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201101-090019/qgis218-stock/somap218_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |                229.1 | +20.8%                       |         2217.2 | +22.2%                 |           344   | +19.9%                  |          5190 |            0 |          0 |       427.212 |            2 |         8040 |         665.9 |        953.9  |       2063.72 |     23.2729  |                9452.91 |            9.23386 |           2058.6 |    10184.3 |     9296.3 |     4946.7 |      99.9 |      99.3 |      49.4 |
| [qgis310-stock > somap310_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201101-090019/qgis310-stock/somap310_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |                782   | +312.2%                      |         7729.5 | +326.0%                |           948.5 | +230.5%                 |          5190 |            0 |          0 |      1489.31  |            5 |        11206 |        3543   |       4245    |       6571.41 |      6.69164 |                2637.58 |            2.655   |           1997.7 |    21359.7 |    19044.6 |     4939.7 |      99   |      74.7 |      34.7 |

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