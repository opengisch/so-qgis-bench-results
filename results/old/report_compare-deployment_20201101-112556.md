# QGIS Benchmark summary compare-deployment (20201101-112556)


compare different types of deployment for QGIS server 3.10 using the same settings

_run completed in 02h 05m 29s_

_Sample size per configuration 11187_
## Summary plot
An interactive summary plot can be found [here](report_compare-deployment_20201101-112556_plot.html)

## Summary
| name                               | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-singlethread-multiinstance | Global  |                847.3 | +0.0%                        |         9868.7 | +0.0%                  |          2694.5 | +0.0%                   |          678 |        17482 |         11187 |            0 |    11430.5 |    7394.83 |     4883.3 |      96.5 |   74.1667 |      18.2 |          0 |
| qgis310-balanced-unlimited-threads | Global  |               1330.8 | +57.1%                       |        15666.4 | +58.7%                 |          4258   | +58.0%                  |         1469 |        22352 |         11187 |            0 |    10603.6 |    6980.03 |     4783.5 |      76   |   46.9333 |      35.8 |          0 |
| qgis310-balanced                   | Global  |               1396.4 | +64.8%                       |        16441   | +66.6%                 |          4517   | +67.6%                  |         1216 |        19062 |         11187 |            0 |    10720   |    6861.4  |     4803.1 |      76.4 |   43.3667 |      21.3 |          0 |
| qgis310-multithread-singleinstance | Global  |               3872.1 | +357.0%                      |        46092.1 | +367.1%                |         12900   | +378.8%                 |         4762 |        44393 |         11187 |            0 |     9761.5 |    6290.57 |     4625.8 |      43.2 |   16.2667 |      12.4 |          0 |

## Aggregated
| name                                                             | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |                 88.6 | +0.0%                        |          977.8 | +0.0%                  |          1281   | +0.0%                   |          407 |         4069 |           735 |            0 |     7145.8 |     6589.6 |     5203.7 |      95.2 |      74.1 |      41.3 |          0 |
| qgis310-balanced-unlimited-threads > somap310_grundplanav_farbig | somap_grundplanav_farbig |                120.6 | +36.1%                       |         1361.7 | +39.3%                 |          1813   | +41.5%                  |          829 |         4427 |           735 |            0 |     6634.8 |     6074.6 |     5160.8 |      72   |      50.5 |      37.5 |          0 |
| qgis310-balanced > somap310_grundplanav_farbig                   | somap_grundplanav_farbig |                127.5 | +43.9%                       |         1440.2 | +47.3%                 |          1960   | +53.0%                  |          772 |         4979 |           735 |            0 |     6399.9 |     5966.1 |     4986.7 |      74.7 |      45   |      39   |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |                333.5 | +276.4%                      |         3901.7 | +299.0%                |          5488   | +328.4%                 |         2441 |         8717 |           735 |            0 |     5705   |     5230.3 |     4636.2 |      40.9 |      17.7 |      12.5 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |                557.2 | +0.0%                        |         6577.4 | +0.0%                  |          1140.5 | +0.0%                   |          237 |         9745 |          5190 |            0 |    11430.5 |     9473.4 |     6158.1 |      96.5 |      74.2 |      18.2 |          0 |
| qgis310-balanced-unlimited-threads > somap310_grundplanav_sw     | somap_grundplanav_sw     |                885.4 | +58.9%                       |        10516.7 | +59.9%                 |          1896   | +66.2%                  |          604 |        13342 |          5190 |            0 |    10603.6 |     8948.1 |     5736.5 |      76   |      44.7 |      35.9 |          0 |
| qgis310-balanced > somap310_grundplanav_sw                       | somap_grundplanav_sw     |                923.7 | +65.8%                       |        10973   | +66.8%                 |          1972   | +72.9%                  |          399 |         9047 |          5190 |            0 |    10720   |     8861.7 |     5660.2 |      76.4 |      42.1 |      21.3 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |               2599.9 | +366.6%                      |        31074.8 | +372.4%                |          5847   | +412.7%                 |         2191 |        23253 |          5190 |            0 |     9761.5 |     8182.2 |     4944.5 |      43.2 |      15.2 |      12.4 |          0 |
| qgis310-singlethread-multiinstance > somap310_lk                 | somap_lk                 |                201.5 | +0.0%                        |         2313.5 | +0.0%                  |           273   | +0.0%                   |           34 |         3668 |          5262 |            0 |     7472.9 |     6121.5 |     4883.3 |      88   |      74.2 |      29.3 |          0 |
| qgis310-balanced-unlimited-threads > somap310_lk                 | somap_lk                 |                324.8 | +61.2%                       |         3788   | +63.7%                 |           549   | +101.1%                 |           36 |         4583 |          5262 |            0 |     7272.7 |     5917.4 |     4783.5 |      61.8 |      45.6 |      35.8 |          0 |
| qgis310-balanced > somap310_lk                                   | somap_lk                 |                345.2 | +71.3%                       |         4027.8 | +74.1%                 |           585   | +114.3%                 |           45 |         5036 |          5262 |            0 |     7866.5 |     5756.4 |     4803.1 |      72.4 |      43   |      38.1 |          0 |
| qgis310-multithread-singleinstance > somap310_lk                 | somap_lk                 |                938.7 | +365.9%                      |        11115.6 | +380.5%                |          1565   | +473.3%                 |          130 |        12423 |          5262 |            0 |     6902.4 |     5459.2 |     4625.8 |      38.2 |      15.9 |      12.9 |          0 |

## Detail
| name                                                                                                                                                                                                                                      | group                                   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201101-112556/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                 88.6 | +0.0%                        |          977.8 | +0.0%                  |          1281   | +0.0%                   |           735 |            0 |          0 |      1330.36  |          407 |         4069 |        1940.4 |       2181.2  |       3485.24 |      8.89077 |               1301.16  |           3.91454  |     7145.8 |     6589.6 |     5203.7 |      95.2 |      74.1 |      41.3 |
| [qgis310-balanced-unlimited-threads > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201101-112556/qgis310-balanced-unlimited-threads/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                120.6 | +36.1%                       |         1361.7 | +39.3%                 |          1813   | +41.5%                  |           735 |            0 |          0 |      1852.69  |          829 |         4427 |        2515.8 |       2908.2  |       3826.36 |      6.41093 |                938.211 |           2.82269  |     6634.8 |     6074.6 |     5160.8 |      72   |      50.5 |      37.5 |
| [qgis310-balanced > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201101-112556/qgis310-balanced/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                                     | somap_grundplanav_farbig > av_f_big.txt |                127.5 | +43.9%                       |         1440.2 | +47.3%                 |          1960   | +53.0%                  |           735 |            0 |          0 |      1959.47  |          772 |         4979 |        2588.8 |       3013.6  |       4278.6  |      6.04361 |                884.483 |           2.66096  |     6399.9 |     5966.1 |     4986.7 |      74.7 |      45   |      39   |
| [qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201101-112556/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                333.5 | +276.4%                      |         3901.7 | +299.0%                |          5488   | +328.4%                 |           735 |            0 |          0 |      5308.5   |         2441 |         8717 |        6629.8 |       7606.2  |       8177.6  |      2.24415 |                328.426 |           0.988084 |     5705   |     5230.3 |     4636.2 |      40.9 |      17.7 |      12.5 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201101-112556/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |                557.2 | +0.0%                        |         6577.4 | +0.0%                  |          1140.5 | +0.0%                   |          5190 |            0 |          0 |      1267.32  |          237 |         9745 |        2206   |       2601.25 |       3614.44 |      9.42131 |               2549.82  |           4.10324  |    11430.5 |     9473.4 |     6158.1 |      96.5 |      74.2 |      18.2 |
| [qgis310-balanced-unlimited-threads > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201101-112556/qgis310-balanced-unlimited-threads/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |                885.4 | +58.9%                       |        10516.7 | +59.9%                 |          1896   | +66.2%                  |          5190 |            0 |          0 |      2026.34  |          604 |        13342 |        3190   |       3685.25 |       5023    |      5.90377 |               1597.83  |           2.57126  |    10603.6 |     8948.1 |     5736.5 |      76   |      44.7 |      35.9 |
| [qgis310-balanced > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201101-112556/qgis310-balanced/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                                           | somap_grundplanav_sw > av_sw_big.txt    |                923.7 | +65.8%                       |        10973   | +66.8%                 |          1972   | +72.9%                  |          5190 |            0 |          0 |      2114.26  |          399 |         9047 |        3295.8 |       3783.6  |       5471.36 |      5.65719 |               1531.11  |           2.46386  |    10720   |     8861.7 |     5660.2 |      76.4 |      42.1 |      21.3 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201101-112556/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |               2599.9 | +366.6%                      |        31074.8 | +372.4%                |          5847   | +412.7%                 |          5190 |            0 |          0 |      5987.43  |         2191 |        23253 |        8513.9 |       9690.3  |      13343.7  |      2.00122 |                541.611 |           0.871588 |     9761.5 |     8182.2 |     4944.5 |      43.2 |      15.2 |      12.4 |
| [qgis310-singlethread-multiinstance > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201101-112556/qgis310-singlethread-multiinstance/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                201.5 | +0.0%                        |         2313.5 | +0.0%                  |           273   | +0.0%                   |          5262 |            0 |          0 |       439.663 |           34 |         3668 |        1054.7 |       1346.4  |       2118.48 |     26.9828  |               1277.31  |          13.6682   |     7472.9 |     6121.5 |     4883.3 |      88   |      74.2 |      29.3 |
| [qgis310-balanced-unlimited-threads > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201101-112556/qgis310-balanced-unlimited-threads/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                324.8 | +61.2%                       |         3788   | +63.7%                 |           549   | +101.1%                 |          5262 |            0 |          0 |       719.877 |           36 |         4583 |        1516   |       1908.35 |       2940.85 |     16.5199  |                781.962 |           8.36824  |     7272.7 |     5917.4 |     4783.5 |      61.8 |      45.6 |      35.8 |
| [qgis310-balanced > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201101-112556/qgis310-balanced/somap310_lk/lk_big.txt/dashboard/index.html)                                                                         | somap_lk > lk_big.txt                   |                345.2 | +71.3%                       |         4027.8 | +74.1%                 |           585   | +114.3%                 |          5262 |            0 |          0 |       765.447 |           45 |         5036 |        1605.4 |       2043    |       3187.44 |     15.5361  |                735.424 |           7.86985  |     7866.5 |     5756.4 |     4803.1 |      72.4 |      43   |      38.1 |
| [qgis310-multithread-singleinstance > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201101-112556/qgis310-multithread-singleinstance/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                938.7 | +365.9%                      |        11115.6 | +380.5%                |          1565   | +473.3%                 |          5262 |            0 |          0 |      2112.43  |          130 |        12423 |        4133.4 |       5090.55 |       7762.85 |      5.64293 |                267.116 |           2.85845  |     6902.4 |     5459.2 |     4625.8 |      38.2 |      15.9 |      12.9 |

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
description: 'compare different types of deployment for QGIS server 3.10 using the same settings'

test-cases:

  qgis310-singlethread-multiinstance:
    active: yes
    parallel-requests: 12
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap310_lk:
        - lk_big.txt
      somap310_grundplanav_farbig:
        - av_f_big.txt
      somap310_grundplanav_sw:
        - av_sw_big.txt

  qgis310-multithread-singleinstance:
    inherit: qgis310-singlethread-multiinstance
    compose-variables:
      QGIS_REPLICAS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '6'

  qgis310-balanced:
    inherit: qgis310-singlethread-multiinstance
    compose-variables:
      QGIS_REPLICAS: '3'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '2'

  qgis310-balanced-unlimited-threads:
    inherit: qgis310-balanced
    compose-variables:
      QGIS_SERVER_MAX_THREADS: '-1'

```
### parsed test configurations

```
description: compare different types of deployment for QGIS server 3.10 using the
  same settings
test-cases:
  qgis310-balanced:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '3'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '2'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-singlethread-multiinstance
    parallel-requests: 12
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis310-balanced-unlimited-threads:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '3'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '-1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-balanced
    parallel-requests: 12
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis310-multithread-singleinstance:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '6'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-singlethread-multiinstance
    parallel-requests: 12
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis310-singlethread-multiinstance:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.10'
    parallel-requests: 12
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx

```