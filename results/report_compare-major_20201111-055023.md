# QGIS Benchmark summary compare-major (20201111-055023)


compare different version of QGIS servers using the same settings

_run completed in 00h 52m 23s_

_Sample size per configuration 11187_
## Summary plot
An interactive summary plot can be found [here](report_compare-major_20201111-055023_plot.html)

## Summary
| name    | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316 | Global  |            608.2 | +0.0%                    |              12   | +0.0%                     |         5832.7 | +0.0%                  |            1325 | +0.0%                   |           15 |        18476 |           1720.8 |         11187 |            0 |     8213.5 |    5124.13 |     2906.1 |      96.4 |   72.9333 |      17.1 |          0 |
| qgis218 | Global  |            725.8 | +19.3%                   |              18.4 | +53.3%                    |         7005   | +20.1%                 |            1395 | +5.3%                   |          446 |        28798 |           1966   |         11187 |            0 |     8341.8 |    5303.8  |     2733.6 |      99.9 |   97.1    |      13.5 |          0 |
| qgis310 | Global  |            819.6 | +34.8%                   |              24.9 | +107.5%                   |         7953.9 | +36.4%                 |            1997 | +50.7%                  |          414 |        17035 |           1720.6 |         11187 |            0 |     8300.9 |    5140.2  |     2854.3 |      95   |   73.3    |      14.8 |          0 |
| qgis314 | Global  |            835   | +37.3%                   |              18.7 | +55.8%                    |         8115.9 | +39.1%                 |            2065 | +55.8%                  |          426 |        14114 |           1720.4 |         11187 |            0 |     8373.8 |    5125.87 |     2921.4 |      97.5 |   73.5667 |      18   |          0 |

## Aggregated
| name                                  | group                    |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------------------------------|--------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316 > somap316_grundplanav_farbig | somap_grundplanav_farbig |             63.2 | +0.0%                    |               0.2 | +0.0%                     |          563.8 | +0.0%                  |           687   | +1.8%                   |            7 |         4564 |            105.1 |           735 |            0 |     5278.2 |     4483.9 |     3378.9 |      96.4 |      73.3 |      27.9 |          0 |
| qgis218 > somap218_grundplanav_farbig | somap_grundplanav_farbig |             69.6 | +10.1%                   |               7.9 | +3850.0%                  |          626.8 | +11.2%                 |           675   | +0.0%                   |          225 |         9059 |            125.7 |           735 |            0 |     4710.8 |     4295.4 |     3702.8 |      99.6 |      95.6 |      18.2 |          0 |
| qgis310 > somap310_grundplanav_farbig | somap_grundplanav_farbig |             84.6 | +33.9%                   |              11.2 | +5500.0%                  |          774.2 | +37.3%                 |           974   | +44.3%                  |          201 |         3797 |            105.1 |           735 |            0 |     5159.7 |     4535.7 |     3360   |      95   |      73.3 |      25.4 |          0 |
| qgis314 > somap314_grundplanav_farbig | somap_grundplanav_farbig |             85.6 | +35.4%                   |               0.2 | +0.0%                     |          791.6 | +40.4%                 |           977   | +44.7%                  |          198 |         4134 |            105.1 |           735 |            0 |     5223.9 |     4550.4 |     3133.5 |      97.5 |      73.4 |      24.6 |          0 |
| qgis316 > somap316_grundplanav_sw     | somap_grundplanav_sw     |            380.6 | +0.0%                    |               0.2 | +0.0%                     |         3718.8 | +0.0%                  |           524   | +0.0%                   |            5 |         8959 |           1372.5 |          5190 |            0 |     8213.5 |     6799.6 |     3979   |      95.4 |      73.9 |      26.9 |          0 |
| qgis218 > somap218_grundplanav_sw     | somap_grundplanav_sw     |            511.2 | +34.3%                   |               0.9 | +350.0%                   |         5000.2 | +34.5%                 |           582   | +11.1%                  |          216 |        16954 |           1578.7 |          5190 |            0 |     8341.8 |     7286.7 |     4067.8 |      99.9 |      98.2 |      13.5 |          0 |
| qgis310 > somap310_grundplanav_sw     | somap_grundplanav_sw     |            536.9 | +41.1%                   |               0.2 | +0.0%                     |         5277.8 | +41.9%                 |           841.5 | +60.6%                  |          182 |         9220 |           1372.3 |          5190 |            0 |     8300.9 |     6874   |     4068.4 |      89.9 |      73.6 |      14.8 |          0 |
| qgis314 > somap314_grundplanav_sw     | somap_grundplanav_sw     |            547.9 | +44.0%                   |               6.7 | +3250.0%                  |         5396.8 | +45.1%                 |           881   | +68.1%                  |          192 |         6660 |           1372.2 |          5190 |            0 |     8373.8 |     6834.1 |     4129.8 |      88.6 |      73.7 |      19.6 |          0 |
| qgis218 > somap218_lk                 | somap_lk                 |            145   | +0.0%                    |               9.6 | +0.0%                     |         1377.9 | +0.0%                  |           138   | +21.1%                  |            5 |         2785 |            261.6 |          5262 |            0 |     5731.2 |     4329.3 |     2733.6 |      99.6 |      97.5 |      16.2 |          0 |
| qgis316 > somap316_lk                 | somap_lk                 |            164.4 | +13.4%                   |              11.6 | +20.8%                    |         1550.2 | +12.5%                 |           114   | +0.0%                   |            3 |         4953 |            243.2 |          5262 |            0 |     5542.5 |     4088.9 |     2906.1 |      89.9 |      71.6 |      17.1 |          0 |
| qgis310 > somap310_lk                 | somap_lk                 |            198.1 | +36.6%                   |              13.5 | +40.6%                    |         1901.9 | +38.0%                 |           181.5 | +59.2%                  |           31 |         4018 |            243.2 |          5262 |            0 |     5920.7 |     4010.9 |     2854.3 |      85.1 |      73   |      17.2 |          0 |
| qgis314 > somap314_lk                 | somap_lk                 |            201.5 | +39.0%                   |              11.8 | +22.9%                    |         1927.4 | +39.9%                 |           207   | +81.6%                  |           36 |         3320 |            243.1 |          5262 |            0 |     5852.9 |     3993.1 |     2921.4 |      92.5 |      73.6 |      18   |          0 |

## Detail
| name                                                                                                                                                                           | group                                   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316 > somap316_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201111-055023/qgis316/somap316_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |             63.2 | +0.0%                    |               0.2 | +0.0%                     |          563.8 | +0.0%                  |           687   | +1.8%                   |           735 |            0 |          0 |       767.073 |            7 |         4564 |        1444.8 |       1657.4  |       2718.24 |     12.7677  |                1868.81 |            5.62154 |            105.1 |     5278.2 |     4483.9 |     3378.9 |      96.4 |      73.3 |      27.9 |
| [qgis218 > somap218_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201111-055023/qgis218/somap218_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |             69.6 | +10.1%                   |               7.9 | +3850.0%                  |          626.8 | +11.2%                 |           675   | +0.0%                   |           735 |            0 |          0 |       852.85  |          225 |         9059 |        1465.8 |       1692.2  |       3204.84 |     11.5072  |                2014.53 |            5.06654 |            125.7 |     4710.8 |     4295.4 |     3702.8 |      99.6 |      95.6 |      18.2 |
| [qgis310 > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201111-055023/qgis310/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |             84.6 | +33.9%                   |              11.2 | +5500.0%                  |          774.2 | +37.3%                 |           974   | +44.3%                  |           735 |            0 |          0 |      1053.35  |          201 |         3797 |        1760.4 |       1973.4  |       2578.72 |      9.3202  |                1364.34 |            4.10362 |            105.1 |     5159.7 |     4535.7 |     3360   |      95   |      73.3 |      25.4 |
| [qgis314 > somap314_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201111-055023/qgis314/somap314_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |             85.6 | +35.4%                   |               0.2 | +0.0%                     |          791.6 | +40.4%                 |           977   | +44.7%                  |           735 |            0 |          0 |      1076.97  |          198 |         4134 |        1827   |       2041.2  |       2897.2  |      9.17569 |                1343.13 |            4.03999 |            105.1 |     5223.9 |     4550.4 |     3133.5 |      97.5 |      73.4 |      24.6 |
| [qgis316 > somap316_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201111-055023/qgis316/somap316_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |            380.6 | +0.0%                    |               0.2 | +0.0%                     |         3718.8 | +0.0%                  |           524   | +0.0%                   |          5190 |            0 |          0 |       716.527 |            5 |         8959 |        1596.9 |       2051.45 |       3048.35 |     13.8566  |                3752.34 |            6.03495 |           1372.5 |     8213.5 |     6799.6 |     3979   |      95.4 |      73.9 |      26.9 |
| [qgis218 > somap218_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201111-055023/qgis218/somap218_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |            511.2 | +34.3%                   |               0.9 | +350.0%                   |         5000.2 | +34.5%                 |           582   | +11.1%                  |          5190 |            0 |          0 |       963.432 |          216 |        16954 |        2183.7 |       2651.45 |       5161.26 |     10.2747  |                3200.35 |            4.4749  |           1578.7 |     8341.8 |     7286.7 |     4067.8 |      99.9 |      98.2 |      13.5 |
| [qgis310 > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201111-055023/qgis310/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |            536.9 | +41.1%                   |               0.2 | +0.0%                     |         5277.8 | +41.9%                 |           841.5 | +60.6%                  |          5190 |            0 |          0 |      1016.93  |          182 |         9220 |        1858.9 |       2368.45 |       3348.15 |      9.77801 |                2647.46 |            4.2586  |           1372.3 |     8300.9 |     6874   |     4068.4 |      89.9 |      73.6 |      14.8 |
| [qgis314 > somap314_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201111-055023/qgis314/somap314_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |            547.9 | +44.0%                   |               6.7 | +3250.0%                  |         5396.8 | +45.1%                 |           881   | +68.1%                  |          5190 |            0 |          0 |      1039.85  |          192 |         6660 |        1904.8 |       2378.35 |       3222.18 |      9.57492 |                2592.39 |            4.17015 |           1372.2 |     8373.8 |     6834.1 |     4129.8 |      88.6 |      73.7 |      19.6 |
| [qgis218 > somap218_lk > lk_big.txt](../results/details/compare-major/20201111-055023/qgis218/somap218_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |            145   | +0.0%                    |               9.6 | +0.0%                     |         1377.9 | +0.0%                  |           138   | +21.1%                  |          5262 |            0 |          0 |       261.864 |            5 |         2785 |         692.7 |        984.7  |       1718.85 |     37.8654  |                1927.6  |           19.1808  |            261.6 |     5731.2 |     4329.3 |     2733.6 |      99.6 |      97.5 |      16.2 |
| [qgis316 > somap316_lk > lk_big.txt](../results/details/compare-major/20201111-055023/qgis316/somap316_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |            164.4 | +13.4%                   |              11.6 | +20.8%                    |         1550.2 | +12.5%                 |           114   | +0.0%                   |          5262 |            0 |          0 |       294.597 |            3 |         4953 |         789   |       1123.55 |       1955.37 |     33.2501  |                1573.33 |           16.843   |            243.2 |     5542.5 |     4088.9 |     2906.1 |      89.9 |      71.6 |      17.1 |
| [qgis310 > somap310_lk > lk_big.txt](../results/details/compare-major/20201111-055023/qgis310/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |            198.1 | +36.6%                   |              13.5 | +40.6%                    |         1901.9 | +38.0%                 |           181.5 | +59.2%                  |          5262 |            0 |          0 |       361.436 |           31 |         4018 |         891.7 |       1189.85 |       1810.37 |     27.402   |                1297.11 |           13.8806  |            243.2 |     5920.7 |     4010.9 |     2854.3 |      85.1 |      73   |      17.2 |
| [qgis314 > somap314_lk > lk_big.txt](../results/details/compare-major/20201111-055023/qgis314/somap314_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |            201.5 | +39.0%                   |              11.8 | +22.9%                    |         1927.4 | +39.9%                 |           207   | +81.6%                  |          5262 |            0 |          0 |       366.294 |           36 |         3320 |         863   |       1140    |       1861.96 |     26.9629  |                1275.73 |           13.6582  |            243.1 |     5852.9 |     3993.1 |     2921.4 |      92.5 |      73.6 |      18   |

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
description: 'compare different version of QGIS servers using the same settings'
test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '6'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '1' #QGIS3
      QGIS_FCGI_PROCESSES: '1' #QGIS2
      PG_SERVICE: 'pg_service.conf'

  qgis218:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_lk:
        - lk_big.txt
      somap218_grundplanav_farbig:
        - av_f_big.txt
      somap218_grundplanav_sw:
        - av_sw_big.txt

  qgis310:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10-ubuntu'
    projects:
      somap310_lk:
        - lk_big.txt
      somap310_grundplanav_farbig:
        - av_f_big.txt
      somap310_grundplanav_sw:
        - av_sw_big.txt

  qgis314:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.14-ubuntu'
    projects:
      somap314_lk:
        - lk_big.txt
      somap314_grundplanav_farbig:
        - av_f_big.txt
      somap314_grundplanav_sw:
        - av_sw_big.txt

  qgis316:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.16-ubuntu'
    projects:
      somap316_lk:
        - lk_big.txt
      somap316_grundplanav_farbig:
        - av_f_big.txt
      somap316_grundplanav_sw:
        - av_sw_big.txt
```
### parsed test configurations

```
description: compare different version of QGIS servers using the same settings
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
  qgis218:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
    inherit: base
    path-prefix: ows
    projects:
      somap218_grundplanav_farbig:
      - av_f_big.txt
      somap218_grundplanav_sw:
      - av_sw_big.txt
      somap218_lk:
      - lk_big.txt
    template: docker-compose-qgis-2
  qgis310:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: 3.10-ubuntu
    inherit: base
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis314:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: 3.14-ubuntu
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap314_grundplanav_farbig:
      - av_f_big.txt
      somap314_grundplanav_sw:
      - av_sw_big.txt
      somap314_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis316:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: 3.16-ubuntu
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap316_grundplanav_farbig:
      - av_f_big.txt
      somap316_grundplanav_sw:
      - av_sw_big.txt
      somap316_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx

```