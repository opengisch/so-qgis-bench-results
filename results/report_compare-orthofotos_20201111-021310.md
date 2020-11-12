# QGIS Benchmark summary compare-orthofotos (20201111-021310)


compare raster rendering on different version of QGIS servers using the same settings

_run completed in 00h 20m 08s_

_Sample size per configuration 5190_
## Summary plot
An interactive summary plot can be found [here](report_compare-orthofotos_20201111-021310_plot.html)

## Summary
| name          | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-stock | Global  |            179.1 | +0.0%                    |               1   | +0.0%                     |         1712.4 | +0.0%                  |           269.5 | +0.0%                   |            4 |         4668 |           2056.8 |          5190 |            0 |    11384.5 |     9548.9 |     2794.8 |      99.1 |      75   |      15.9 |          0 |
| qgis218-stock | Global  |            219.2 | +22.4%                   |               2.6 | +160.0%                   |         2122.7 | +24.0%                 |           331   | +22.8%                  |            2 |         7497 |           2058.6 |          5190 |            0 |     7460.7 |     6775.6 |     3294.4 |     100   |      99.1 |      13.5 |          0 |
| qgis310-stock | Global  |            746.5 | +316.8%                  |               1   | +0.0%                     |         7374.4 | +330.6%                |           923.5 | +242.7%                 |            7 |        12456 |           1997.7 |          5190 |            0 |    19111.9 |    16910.8 |     3088.4 |      98.6 |      74.8 |      13.8 |          0 |

## Aggregated
| name                               | group           |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------|-----------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-stock > somap316_orthofoto | somap_orthofoto |            179.1 | +0.0%                    |               1   | +0.0%                     |         1712.4 | +0.0%                  |           269.5 | +0.0%                   |            4 |         4668 |           2056.8 |          5190 |            0 |    11384.5 |     9548.9 |     2794.8 |      99.1 |      75   |      15.9 |          0 |
| qgis218-stock > somap218_orthofoto | somap_orthofoto |            219.2 | +22.4%                   |               2.6 | +160.0%                   |         2122.7 | +24.0%                 |           331   | +22.8%                  |            2 |         7497 |           2058.6 |          5190 |            0 |     7460.7 |     6775.6 |     3294.4 |     100   |      99.1 |      13.5 |          0 |
| qgis310-stock > somap310_orthofoto | somap_orthofoto |            746.5 | +316.8%                  |               1   | +0.0%                     |         7374.4 | +330.6%                |           923.5 | +242.7%                 |            7 |        12456 |           1997.7 |          5190 |            0 |    19111.9 |    16910.8 |     3088.4 |      98.6 |      74.8 |      13.8 |          0 |

## Detail
| name                                                                                                                                                                                      | group                                |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316-stock > somap316_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201111-021310/qgis316-stock/somap316_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |            179.1 | +0.0%                    |               1   | +0.0%                     |         1712.4 | +0.0%                  |           269.5 | +0.0%                   |          5190 |            0 |          0 |       329.941 |            4 |         4668 |         603   |         785.9 |       1271.36 |     30.0741  |               12204.2  |           11.9323  |           2056.8 |    11384.5 |     9548.9 |     2794.8 |      99.1 |      75   |      15.9 |
| [qgis218-stock > somap218_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201111-021310/qgis218-stock/somap218_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |            219.2 | +22.4%                   |               2.6 | +160.0%                   |         2122.7 | +24.0%                 |           331   | +22.8%                  |          5190 |            0 |          0 |       409.005 |            2 |         7497 |         657   |         873.9 |       1877.61 |     24.309   |                9873.76 |            9.64494 |           2058.6 |     7460.7 |     6775.6 |     3294.4 |     100   |      99.1 |      13.5 |
| [qgis310-stock > somap310_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201111-021310/qgis310-stock/somap310_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |            746.5 | +316.8%                  |               1   | +0.0%                     |         7374.4 | +330.6%                |           923.5 | +242.7%                 |          5190 |            0 |          0 |      1420.89  |            7 |        12456 |        3374.6 |        4001   |       5980.62 |      7.01058 |                2763.29 |            2.78154 |           1997.7 |    19111.9 |    16910.8 |     3088.4 |      98.6 |      74.8 |      13.8 |

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
      QGIS_VERSION: '3.10-ubuntu'
    projects:
      somap310_orthofoto:
        - orthofotos_big.txt

  qgis316-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.16-ubuntu'
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
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
  qgis218-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
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
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: 3.10-ubuntu
    inherit: base
    path-prefix: ogc
    projects:
      somap310_orthofoto:
      - orthofotos_big.txt
    template: docker-compose-qgis-3-nginx
  qgis316-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: 3.16-ubuntu
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap316_orthofoto:
      - orthofotos_big.txt
    template: docker-compose-qgis-3-nginx

```