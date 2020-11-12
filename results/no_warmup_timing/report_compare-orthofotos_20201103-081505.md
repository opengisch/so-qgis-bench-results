# QGIS Benchmark summary compare-orthofotos (20201103-081505)


compare raster rendering on different version of QGIS servers using the same settings

_run completed in 00h 21m 34s_

_Sample size per configuration 5190_
## Summary plot
An interactive summary plot can be found [here](report_compare-orthofotos_20201103-081505_plot.html)

## Summary
| name          | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-stock | Global  |                193.5 | +0.0%                        |         1854.1 | +0.0%                  |             295 | +0.0%                   |            5 |         5262 |           2056.8 |          5190 |            0 |    11417.9 |     9555.1 |     2561.2 |      97.2 |      75   |      13.8 |          0 |
| qgis218-stock | Global  |                236.7 | +22.3%                       |         2291   | +23.6%                 |             352 | +19.3%                  |            2 |         8111 |           2058.6 |          5190 |            0 |     8158   |     7191.3 |     2772.6 |      99.9 |      99   |      14.6 |          0 |
| qgis310-stock | Global  |                797.3 | +312.0%                      |         7873   | +324.6%                |            1033 | +250.2%                 |            7 |        14260 |           1997.7 |          5190 |            0 |    19421.6 |    17160.3 |     2825.5 |      92.5 |      74.6 |      16.5 |          0 |

## Aggregated
| name                               | group           |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------|-----------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-stock > somap316_orthofoto | somap_orthofoto |                193.5 | +0.0%                        |         1854.1 | +0.0%                  |             295 | +0.0%                   |            5 |         5262 |           2056.8 |          5190 |            0 |    11417.9 |     9555.1 |     2561.2 |      97.2 |      75   |      13.8 |          0 |
| qgis218-stock > somap218_orthofoto | somap_orthofoto |                236.7 | +22.3%                       |         2291   | +23.6%                 |             352 | +19.3%                  |            2 |         8111 |           2058.6 |          5190 |            0 |     8158   |     7191.3 |     2772.6 |      99.9 |      99   |      14.6 |          0 |
| qgis310-stock > somap310_orthofoto | somap_orthofoto |                797.3 | +312.0%                      |         7873   | +324.6%                |            1033 | +250.2%                 |            7 |        14260 |           1997.7 |          5190 |            0 |    19421.6 |    17160.3 |     2825.5 |      92.5 |      74.6 |      16.5 |          0 |

## Detail
| name                                                                                                                                                                                      | group                                |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316-stock > somap316_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201103-081505/qgis316-stock/somap316_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |                193.5 | +0.0%                        |         1854.1 | +0.0%                  |             295 | +0.0%                   |          5190 |            0 |          0 |       357.249 |            5 |         5262 |         650   |        816    |       1451.36 |     27.7453  |               11259.2  |           11.0083  |           2056.8 |    11417.9 |     9555.1 |     2561.2 |      97.2 |      75   |      13.8 |
| [qgis218-stock > somap218_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201103-081505/qgis218-stock/somap218_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |                236.7 | +22.3%                       |         2291   | +23.6%                 |             352 | +19.3%                  |          5190 |            0 |          0 |       441.423 |            2 |         8111 |         691.9 |        953.5  |       2073.36 |     22.5323  |                9152.09 |            8.94001 |           2058.6 |     8158   |     7191.3 |     2772.6 |      99.9 |      99   |      14.6 |
| [qgis310-stock > somap310_orthofoto > orthofotos_big.txt](../results/details/compare-orthofotos/20201103-081505/qgis310-stock/somap310_orthofoto/orthofotos_big.txt/dashboard/index.html) | somap_orthofoto > orthofotos_big.txt |                797.3 | +312.0%                      |         7873   | +324.6%                |            1033 | +250.2%                 |          5190 |            0 |          0 |      1516.96  |            7 |        14260 |        3512.8 |       4260.45 |       6560.97 |      6.56375 |                2587.17 |            2.60426 |           1997.7 |    19421.6 |    17160.3 |     2825.5 |      92.5 |      74.6 |      16.5 |

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
      QGIS_VERSION: '3.10'
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
      QGIS_VERSION: '3.16'
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap316_orthofoto:
      - orthofotos_big.txt
    template: docker-compose-qgis-3-nginx

```