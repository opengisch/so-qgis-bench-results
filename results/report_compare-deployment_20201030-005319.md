# QGIS Benchmark summary compare-deployment (20201030-005319)


compare different types of deployment for QGIS server 3.10 using the same settings

_run completed in 02h 02m 25s_

_Sample size per configuration 11187_
## Summary plot
An interactive summary plot can be found [here](report_compare-deployment_20201030-005319_plot.html)

## Summary
| name                               | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-singlethread-multiinstance | Global  |                801.3 | +0.0%                        |         9311.6 | +0.0%                  |          2490.5 | +0.0%                   |          630 |        13957 |         11187 |            0 |    10425.4 |    6688.63 |     4004   |      99   |   74.1    |      19.8 |          0 |
| qgis310-balanced-unlimited-threads | Global  |               1304.7 | +62.8%                       |        15354   | +64.9%                 |          4233.5 | +70.0%                  |         1179 |        17347 |         11187 |            0 |     9882.3 |    6039.1  |     4007.6 |      70.1 |   48.1667 |      12.7 |          0 |
| qgis310-balanced                   | Global  |               1372.9 | +71.3%                       |        16167.7 | +73.6%                 |          4468   | +79.4%                  |         1421 |        20238 |         11187 |            0 |     9485.1 |    5939.17 |     3836.8 |      76.4 |   43.7667 |      27.2 |          0 |
| qgis310-multithread-singleinstance | Global  |               3783.2 | +372.1%                      |        45034.4 | +383.6%                |         12646   | +407.8%                 |         4605 |        43693 |         11187 |            0 |     8888.9 |    5441.9  |     3773.2 |      37.1 |   16.3    |      12.4 |          0 |

## Aggregated
| name                                                             | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------------------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-singlethread-multiinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |                 82   | +0.0%                        |          905.4 | +0.0%                  |          1179   | +0.0%                   |          374 |         3879 |           735 |            0 |     6749.7 |     5976.7 |     4382.7 |      97.6 |      74   |      38.5 |          0 |
| qgis310-balanced-unlimited-threads > somap310_grundplanav_farbig | somap_grundplanav_farbig |                118.2 | +44.1%                       |         1339.2 | +47.9%                 |          1838   | +55.9%                  |          558 |         4097 |           735 |            0 |     5736   |     5127.2 |     4310   |      68.6 |      52.5 |      34.8 |          0 |
| qgis310-balanced > somap310_grundplanav_farbig                   | somap_grundplanav_farbig |                128.5 | +56.7%                       |         1455.6 | +60.8%                 |          1955   | +65.8%                  |          779 |         4409 |           735 |            0 |     5660.3 |     5010.4 |     4106   |      73.9 |      45.8 |      34.4 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_farbig | somap_grundplanav_farbig |                326   | +297.6%                      |         3815.6 | +321.4%                |          5375   | +355.9%                 |         2383 |         8724 |           735 |            0 |     4749.8 |     4382.4 |     3859.7 |      32.9 |      17.7 |      12.5 |          0 |
| qgis310-singlethread-multiinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |                525.5 | +0.0%                        |         6196.4 | +0.0%                  |          1059   | +0.0%                   |          223 |         6121 |          5190 |            0 |    10425.4 |     8814.5 |     5611.6 |      96.8 |      74.2 |      21.8 |          0 |
| qgis310-balanced-unlimited-threads > somap310_grundplanav_sw     | somap_grundplanav_sw     |                872.7 | +66.1%                       |        10357.8 | +67.2%                 |          1854   | +75.1%                  |          551 |         8309 |          5190 |            0 |     9882.3 |     7898.9 |     4677.7 |      64.9 |      46.1 |      12.7 |          0 |
| qgis310-balanced > somap310_grundplanav_sw                       | somap_grundplanav_sw     |                909.2 | +73.0%                       |        10797.7 | +74.3%                 |          1949   | +84.0%                  |          568 |        10970 |          5190 |            0 |     9485.1 |     7900.9 |     4666.1 |      76.4 |      42.7 |      27.2 |          0 |
| qgis310-multithread-singleinstance > somap310_grundplanav_sw     | somap_grundplanav_sw     |               2536.9 | +382.8%                      |        30321.1 | +389.3%                |          5725.5 | +440.7%                 |         2088 |        22468 |          5190 |            0 |     8888.9 |     7330.4 |     4079.4 |      34.3 |      15.2 |      12.4 |          0 |
| qgis310-singlethread-multiinstance > somap310_lk                 | somap_lk                 |                193.8 | +0.0%                        |         2209.7 | +0.0%                  |           252.5 | +0.0%                   |           33 |         3957 |          5262 |            0 |     6923   |     5274.7 |     4004   |      99   |      74.1 |      19.8 |          0 |
| qgis310-balanced-unlimited-threads > somap310_lk                 | somap_lk                 |                313.8 | +61.9%                       |         3656.9 | +65.5%                 |           541.5 | +114.5%                 |           70 |         4941 |          5262 |            0 |     7097   |     5091.2 |     4007.6 |      70.1 |      45.9 |      38.6 |          0 |
| qgis310-balanced > somap310_lk                                   | somap_lk                 |                335.2 | +73.0%                       |         3914.4 | +77.1%                 |           564   | +123.4%                 |           74 |         4859 |          5262 |            0 |     6346.8 |     4906.2 |     3836.8 |      67.9 |      42.8 |      32.5 |          0 |
| qgis310-multithread-singleinstance > somap310_lk                 | somap_lk                 |                920.3 | +374.9%                      |        10897.7 | +393.2%                |          1545.5 | +512.1%                 |          134 |        12501 |          5262 |            0 |     6041.7 |     4612.9 |     3773.2 |      37.1 |      16   |      12.8 |          0 |

## Detail
| name                                                                                                                                                                                                                                      | group                                   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-singlethread-multiinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201030-005319/qgis310-singlethread-multiinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                 82   | +0.0%                        |          905.4 | +0.0%                  |          1179   | +0.0%                   |           735 |            0 |          0 |      1231.84  |          374 |         3879 |        1815.2 |       2098    |       3244.56 |      9.61828 |               1407.61  |           4.23486  |     6749.7 |     5976.7 |     4382.7 |      97.6 |      74   |      38.5 |
| [qgis310-balanced-unlimited-threads > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201030-005319/qgis310-balanced-unlimited-threads/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                118.2 | +44.1%                       |         1339.2 | +47.9%                 |          1838   | +55.9%                  |           735 |            0 |          0 |      1822.1   |          558 |         4097 |        2413.8 |       2725.2  |       3622.56 |      6.52417 |                954.797 |           2.87255  |     5736   |     5127.2 |     4310   |      68.6 |      52.5 |      34.8 |
| [qgis310-balanced > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201030-005319/qgis310-balanced/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)                                     | somap_grundplanav_farbig > av_f_big.txt |                128.5 | +56.7%                       |         1455.6 | +60.8%                 |          1955   | +65.8%                  |           735 |            0 |          0 |      1980.44  |          779 |         4409 |        2733.4 |       3034.6  |       4169.96 |      5.98076 |                875.269 |           2.63329  |     5660.3 |     5010.4 |     4106   |      73.9 |      45.8 |      34.4 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-deployment/20201030-005319/qgis310-multithread-singleinstance/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                326   | +297.6%                      |         3815.6 | +321.4%                |          5375   | +355.9%                 |           735 |            0 |          0 |      5191.26  |         2383 |         8724 |        6441.6 |       7410    |       8054.44 |      2.29487 |                335.85  |           1.01042  |     4749.8 |     4382.4 |     3859.7 |      32.9 |      17.7 |      12.5 |
| [qgis310-singlethread-multiinstance > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201030-005319/qgis310-singlethread-multiinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |                525.5 | +0.0%                        |         6196.4 | +0.0%                  |          1059   | +0.0%                   |          5190 |            0 |          0 |      1193.91  |          223 |         6121 |        2087.8 |       2500    |       3560.17 |      9.99549 |               2705.16  |           4.35332  |    10425.4 |     8814.5 |     5611.6 |      96.8 |      74.2 |      21.8 |
| [qgis310-balanced-unlimited-threads > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201030-005319/qgis310-balanced-unlimited-threads/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |                872.7 | +66.1%                       |        10357.8 | +67.2%                 |          1854   | +75.1%                  |          5190 |            0 |          0 |      1995.72  |          551 |         8309 |        3113.9 |       3569.8  |       5377.34 |      5.99006 |               1621.19  |           2.60884  |     9882.3 |     7898.9 |     4677.7 |      64.9 |      46.1 |      12.7 |
| [qgis310-balanced > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201030-005319/qgis310-balanced/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                                           | somap_grundplanav_sw > av_sw_big.txt    |                909.2 | +73.0%                       |        10797.7 | +74.3%                 |          1949   | +84.0%                  |          5190 |            0 |          0 |      2080.47  |          568 |        10970 |        3260.8 |       3765.35 |       5285    |      5.74806 |               1555.69  |           2.50344  |     9485.1 |     7900.9 |     4666.1 |      76.4 |      42.7 |      27.2 |
| [qgis310-multithread-singleinstance > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-deployment/20201030-005319/qgis310-multithread-singleinstance/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |               2536.9 | +382.8%                      |        30321.1 | +389.3%                |          5725.5 | +440.7%                 |          5190 |            0 |          0 |      5842.22  |         2088 |        22468 |        8320.7 |       9481.8  |      12939    |      2.05097 |                555.089 |           0.893253 |     8888.9 |     7330.4 |     4079.4 |      34.3 |      15.2 |      12.4 |
| [qgis310-singlethread-multiinstance > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201030-005319/qgis310-singlethread-multiinstance/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                193.8 | +0.0%                        |         2209.7 | +0.0%                  |           252.5 | +0.0%                   |          5262 |            0 |          0 |       419.942 |           33 |         3957 |        1014   |       1322.1  |       2074.59 |     28.0624  |               1328.41  |          14.2151   |     6923   |     5274.7 |     4004   |      99   |      74.1 |      19.8 |
| [qgis310-balanced-unlimited-threads > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201030-005319/qgis310-balanced-unlimited-threads/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                313.8 | +61.9%                       |         3656.9 | +65.5%                 |           541.5 | +114.5%                 |          5262 |            0 |          0 |       694.973 |           70 |         4941 |        1451.7 |       1799    |       2744.81 |     17.1082  |                809.829 |           8.66624  |     7097   |     5091.2 |     4007.6 |      70.1 |      45.9 |      38.6 |
| [qgis310-balanced > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201030-005319/qgis310-balanced/somap310_lk/lk_big.txt/dashboard/index.html)                                                                         | somap_lk > lk_big.txt                   |                335.2 | +73.0%                       |         3914.4 | +77.1%                 |           564   | +123.4%                 |          5262 |            0 |          0 |       743.905 |           74 |         4859 |        1598   |       2017.85 |       3055.51 |     15.9916  |                756.984 |           8.10062  |     6346.8 |     4906.2 |     3836.8 |      67.9 |      42.8 |      32.5 |
| [qgis310-multithread-singleinstance > somap310_lk > lk_big.txt](../results/details/compare-deployment/20201030-005319/qgis310-multithread-singleinstance/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                920.3 | +374.9%                      |        10897.7 | +393.2%                |          1545.5 | +512.1%                 |          5262 |            0 |          0 |      2071.03  |          134 |        12501 |        4076.5 |       4996    |       7758.99 |      5.75541 |                272.443 |           2.91542  |     6041.7 |     4612.9 |     3773.2 |      37.1 |      16   |      12.8 |

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