# QGIS Benchmark summary compare-major (20201028-070448)


compare different version of QGIS servers using the same settings

_run completed in 03h 20m 33s_
## Summary plot
An interactive summary plot can be found [here](report_compare-major_20201028-070448_plot.html)

## Summary
| name               | group   |   duration s |   medianResTime |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------|---------|--------------|-----------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-stock      | Global  |       5929.8 |          1253.5 |               0   |         11187 |            0 |     7865.3 |    4898.87 |     2721.9 |      98.6 |   73.0333 |      12.5 |          0 |
| qgis218-stock      | Global  |       7261.9 |          1425   |              22.5 |         11187 |            0 |     7373.4 |    4946.9  |     2619.6 |      99.8 |   97.3    |      12.2 |          0 |
| qgis310-stock      | Global  |       8076.7 |          2028   |              36.2 |         11187 |            0 |     8603.8 |    5087.33 |     2739.4 |      98.9 |   73.5333 |      12.8 |          0 |
| qgis314-stock      | Global  |       8290.1 |          2130   |              39.8 |         11187 |            0 |     7392.1 |    4900.9  |     2794.6 |      98.2 |   73.5    |      13.6 |          0 |
| qgis314-standalone | Global  |      41865.1 |          1770   |             606   |         11187 |            0 |    18731.8 |   11385.3  |     2700.4 |      97.9 |   59.7667 |      12.3 |          0 |
| qgis316-standalone | Global  |      46552.3 |          1763.5 |             685.1 |         11187 |            0 |    15643   |    9023.03 |     2567.6 |      98.9 |   56.4667 |      13.8 |          0 |

## Aggregated
| name                                             | group                    |   duration s |   medianResTime |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------------------------------------|--------------------------|--------------|-----------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-stock > somap316_grundplanav_farbig      | somap_grundplanav_farbig |        564.8 |           591   |               0   |           735 |            0 |     5124.5 |     4493.8 |     3037.3 |      98.6 |      73.1 |      26   |          0 |
| qgis218-stock > somap218_grundplanav_farbig      | somap_grundplanav_farbig |        636.4 |           679   |              12.7 |           735 |            0 |     4580.9 |     4139.9 |     3603   |      99.2 |      95.7 |      24.8 |          0 |
| qgis310-stock > somap310_grundplanav_farbig      | somap_grundplanav_farbig |        779.3 |           981   |              38   |           735 |            0 |     5310.6 |     4568.4 |     2964.2 |      96.1 |      73.6 |      25.6 |          0 |
| qgis314-stock > somap314_grundplanav_farbig      | somap_grundplanav_farbig |        802.1 |          1033   |              42   |           735 |            0 |     5193.9 |     4539.8 |     3058.3 |      98.2 |      73.6 |      27   |          0 |
| qgis314-standalone > somap314_grundplanav_farbig | somap_grundplanav_farbig |       8472.4 |           809   |            1400   |           735 |            0 |    14356.8 |    11784.3 |     4605.1 |      97.5 |      56.9 |      12.6 |          0 |
| qgis316-standalone > somap314_grundplanav_farbig | somap_grundplanav_farbig |      10775.6 |           809   |            1807.7 |           735 |            0 |    10215   |     8977.2 |     3165.7 |      98.9 |      53.5 |      13.9 |          0 |
| qgis316-stock > somap316_grundplanav_sw          | somap_grundplanav_sw     |       3771.4 |           546.5 |               0   |          5190 |            0 |     7865.3 |     6297.5 |     4016.4 |      95.2 |      73.6 |      12.5 |          0 |
| qgis218-stock > somap218_grundplanav_sw          | somap_grundplanav_sw     |       5210.4 |           604   |              38.2 |          5190 |            0 |     7373.4 |     6553.9 |     3916.6 |      99.8 |      98.3 |      13.4 |          0 |
| qgis310-stock > somap310_grundplanav_sw          | somap_grundplanav_sw     |       5369.4 |           854   |              42.4 |          5190 |            0 |     8603.8 |     6810.4 |     4236.1 |      98.9 |      73.7 |      12.8 |          0 |
| qgis314-stock > somap314_grundplanav_sw          | somap_grundplanav_sw     |       5553.3 |           893   |              47.2 |          5190 |            0 |     7392.1 |     6277.5 |     4129.2 |      95   |      73.7 |      13.6 |          0 |
| qgis314-standalone > somap314_grundplanav_sw     | somap_grundplanav_sw     |      31465.8 |           762   |             734.3 |          5190 |            0 |    18731.8 |    17151.2 |    12098.3 |      97.9 |      55.9 |      12.3 |          0 |
| qgis316-standalone > somap314_grundplanav_sw     | somap_grundplanav_sw     |      33830.3 |           736.5 |             797   |          5190 |            0 |    15643   |    14054.2 |     7861.8 |      98.4 |      56.7 |      13.8 |          0 |
| qgis218-stock > somap218_lk                      | somap_lk                 |       1415.1 |           142   |               0   |          5262 |            0 |     5330.2 |     4146.9 |     2619.6 |      99.7 |      97.9 |      12.2 |          0 |
| qgis316-stock > somap316_lk                      | somap_lk                 |       1593.5 |           116   |              12.6 |          5262 |            0 |     5104.1 |     3905.3 |     2721.9 |      87.9 |      72.4 |      14.6 |          0 |
| qgis314-standalone > somap314_lk                 | somap_lk                 |       1926.9 |           199   |              36.2 |          5262 |            0 |     6728.2 |     5220.4 |     2700.4 |      86.1 |      66.5 |      16.1 |          0 |
| qgis310-stock > somap310_lk                      | somap_lk                 |       1928   |           193   |              36.2 |          5262 |            0 |     4988.2 |     3883.2 |     2739.4 |      89.8 |      73.3 |      14.6 |          0 |
| qgis314-stock > somap314_lk                      | somap_lk                 |       1934.7 |           204   |              36.7 |          5262 |            0 |     5272.6 |     3885.4 |     2794.6 |      91.3 |      73.2 |      15.1 |          0 |
| qgis316-standalone > somap314_lk                 | somap_lk                 |       1946.4 |           218   |              37.5 |          5262 |            0 |     6916   |     4037.7 |     2567.6 |      79.7 |      59.2 |      16.7 |          0 |

## Detail
| name                                                                                                                                                                                                 | group                                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316-stock > somap316_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201028-070448/qgis316-stock/somap316_grundplanav_farbig/av_f_big.txt/dashboard/index.html)           | somap_grundplanav_farbig > av_f_big.txt |        564.8 |               0   |           735 |            0 |          0 |       768.495 |           591   |            6 |         5030 |        1465.4 |       1650.4  |       3016.6  |    12.8328   |              1877.81   |           5.6502   |     5124.5 |     4493.8 |     3037.3 |      98.6 |      73.1 |      26   |
| [qgis218-stock > somap218_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201028-070448/qgis218-stock/somap218_grundplanav_farbig/av_f_big.txt/dashboard/index.html)           | somap_grundplanav_farbig > av_f_big.txt |        636.4 |              12.7 |           735 |            0 |          0 |       865.839 |           679   |          227 |         8558 |        1511   |       1824    |       2715.2  |    11.2981   |              1977.39   |           4.97449  |     4580.9 |     4139.9 |     3603   |      99.2 |      95.7 |      24.8 |
| [qgis310-stock > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201028-070448/qgis310-stock/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)           | somap_grundplanav_farbig > av_f_big.txt |        779.3 |              38   |           735 |            0 |          0 |      1060.32  |           981   |          199 |         4355 |        1711   |       1976.4  |       3328.16 |     9.30698  |              1362.1    |           4.0978   |     5310.6 |     4568.4 |     2964.2 |      96.1 |      73.6 |      25.6 |
| [qgis314-stock > somap314_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201028-070448/qgis314-stock/somap314_grundplanav_farbig/av_f_big.txt/dashboard/index.html)           | somap_grundplanav_farbig > av_f_big.txt |        802.1 |              42   |           735 |            0 |          0 |      1091.23  |          1033   |          206 |         4563 |        1823.4 |       2075.8  |       3036.4  |     9.04315  |              1323.37   |           3.98163  |     5193.9 |     4539.8 |     3058.3 |      98.2 |      73.6 |      27   |
| [qgis314-standalone > somap314_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201028-070448/qgis314-standalone/somap314_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |       8472.4 |            1400   |           735 |            0 |          0 |     11527.1   |           809   |          194 |       293588 |       22577.6 |      79354.2  |     170110    |     0.866698 |               121.308  |           0.39345  |    14356.8 |    11784.3 |     4605.1 |      97.5 |      56.9 |      12.6 |
| [qgis316-standalone > somap314_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201028-070448/qgis316-standalone/somap314_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |      10775.6 |            1807.7 |           735 |            0 |          0 |     14660.7   |           809   |            8 |       261972 |       63973.8 |     102834    |     186299    |     0.681326 |                95.3533 |           0.309298 |    10215   |     8977.2 |     3165.7 |      98.9 |      53.5 |      13.9 |
| [qgis316-stock > somap316_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201028-070448/qgis316-stock/somap316_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                 | somap_grundplanav_sw > av_sw_big.txt    |       3771.4 |               0   |          5190 |            0 |          0 |       726.664 |           546.5 |            5 |         9979 |        1574.8 |       2051.45 |       3168    |    13.6412   |              3692.26   |           5.94111  |     7865.3 |     6297.5 |     4016.4 |      95.2 |      73.6 |      12.5 |
| [qgis218-stock > somap218_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201028-070448/qgis218-stock/somap218_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                 | somap_grundplanav_sw > av_sw_big.txt    |       5210.4 |              38.2 |          5190 |            0 |          0 |      1003.93  |           604   |          221 |        18832 |        2300.9 |       2833.65 |       5535.25 |     9.86178  |              3070.69   |           4.29508  |     7373.4 |     6553.9 |     3916.6 |      99.8 |      98.3 |      13.4 |
| [qgis310-stock > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201028-070448/qgis310-stock/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                 | somap_grundplanav_sw > av_sw_big.txt    |       5369.4 |              42.4 |          5190 |            0 |          0 |      1034.57  |           854   |          185 |         6230 |        1932.5 |       2369.45 |       3391.18 |     9.60092  |              2598.35   |           4.18147  |     8603.8 |     6810.4 |     4236.1 |      98.9 |      73.7 |      12.8 |
| [qgis314-stock > somap314_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201028-070448/qgis314-stock/somap314_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                 | somap_grundplanav_sw > av_sw_big.txt    |       5553.3 |              47.2 |          5190 |            0 |          0 |      1070.01  |           893   |          195 |         6635 |        1982   |       2448.7  |       3417.44 |     9.28711  |              2513.5    |           4.0448   |     7392.1 |     6277.5 |     4129.2 |      95   |      73.7 |      13.6 |
| [qgis314-standalone > somap314_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201028-070448/qgis314-standalone/somap314_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |      31465.8 |             734.3 |          5190 |            0 |          0 |      6062.78  |           762   |          191 |       308578 |        3288.6 |      31064.9  |     141561    |     1.62753  |               424.491  |           0.731088 |    18731.8 |    17151.2 |    12098.3 |      97.9 |      55.9 |      12.3 |
| [qgis316-standalone > somap314_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201028-070448/qgis316-standalone/somap314_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |      33830.3 |             797   |          5190 |            0 |          0 |      6518.36  |           736.5 |            8 |       254707 |        3323.8 |      72753.6  |     153414    |     1.51236  |               394.486  |           0.679354 |    15643   |    14054.2 |     7861.8 |      98.4 |      56.7 |      13.8 |
| [qgis218-stock > somap218_lk > lk_big.txt](../results/details/compare-major/20201028-070448/qgis218-stock/somap218_lk/lk_big.txt/dashboard/index.html)                                               | somap_lk > lk_big.txt                   |       1415.1 |               0   |          5262 |            0 |          0 |       268.933 |           142   |            5 |         2656 |         714.1 |       1015.4  |       1741.36 |    36.8503   |              1876.17   |          18.6666   |     5330.2 |     4146.9 |     2619.6 |      99.7 |      97.9 |      12.2 |
| [qgis316-stock > somap316_lk > lk_big.txt](../results/details/compare-major/20201028-070448/qgis316-stock/somap316_lk/lk_big.txt/dashboard/index.html)                                               | somap_lk > lk_big.txt                   |       1593.5 |              12.6 |          5262 |            0 |          0 |       302.839 |           116   |            3 |         4148 |         837   |       1181.85 |       2007    |    32.3411   |              1530.43   |          16.3825   |     5104.1 |     3905.3 |     2721.9 |      87.9 |      72.4 |      14.6 |
| [qgis314-standalone > somap314_lk > lk_big.txt](../results/details/compare-major/20201028-070448/qgis314-standalone/somap314_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |       1926.9 |              36.2 |          5262 |            0 |          0 |       366.185 |           199   |           32 |         3864 |         912.7 |       1255.55 |       2301.11 |    27.0683   |              1277.9    |          14.0816   |     6728.2 |     5220.4 |     2700.4 |      86.1 |      66.5 |      16.1 |
| [qgis310-stock > somap310_lk > lk_big.txt](../results/details/compare-major/20201028-070448/qgis310-stock/somap310_lk/lk_big.txt/dashboard/index.html)                                               | somap_lk > lk_big.txt                   |       1928   |              36.2 |          5262 |            0 |          0 |       366.397 |           193   |           31 |         3698 |         920.7 |       1233    |       1945.33 |    26.9339   |              1274.96   |          13.6435   |     4988.2 |     3883.2 |     2739.4 |      89.8 |      73.3 |      14.6 |
| [qgis314-stock > somap314_lk > lk_big.txt](../results/details/compare-major/20201028-070448/qgis314-stock/somap314_lk/lk_big.txt/dashboard/index.html)                                               | somap_lk > lk_big.txt                   |       1934.7 |              36.7 |          5262 |            0 |          0 |       367.672 |           204   |           35 |         4743 |         871.7 |       1170    |       2030.48 |    26.7051   |              1263.6    |          13.5276   |     5272.6 |     3885.4 |     2794.6 |      91.3 |      73.2 |      15.1 |
| [qgis316-standalone > somap314_lk > lk_big.txt](../results/details/compare-major/20201028-070448/qgis316-standalone/somap314_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |       1946.4 |              37.5 |          5262 |            0 |          0 |       369.9   |           218   |            4 |         3884 |         993   |       1313.7  |       1946.96 |    26.6966   |              1260.3    |          13.8882   |     6916   |     4037.7 |     2567.6 |      79.7 |      59.2 |      16.7 |

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
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '1' #QGIS3
      QGIS_FCGI_PROCESSES: '1' #QGIS2
      PG_SERVICE: 'pg_service.conf'

  qgis218-stock:
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

  qgis310-stock:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_lk:
        - lk_big.txt
      somap310_grundplanav_farbig:
        - av_f_big.txt
      somap310_grundplanav_sw:
        - av_sw_big.txt

  qgis314-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_lk:
        - lk_big.txt
      somap314_grundplanav_farbig:
        - av_f_big.txt
      somap314_grundplanav_sw:
        - av_sw_big.txt

  qgis316-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.16'
    projects:
      somap316_lk:
        - lk_big.txt
      somap316_grundplanav_farbig:
        - av_f_big.txt
      somap316_grundplanav_sw:
        - av_sw_big.txt

  qgis314-standalone:
    active: yes
    inherit: qgis314-stock
    template: docker-compose-qgis-3-standalone
    path-prefix: ''
    use-map-param-path: '/io/data'

  qgis316-standalone:
    active: yes
    inherit: qgis314-standalone
    compose-variables:
      QGIS_VERSION: '3.16'


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
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
  qgis218-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
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
  qgis310-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
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
  qgis314-standalone:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.14'
    inherit: qgis314-stock
    path-prefix: ''
    projects:
      somap314_grundplanav_farbig:
      - av_f_big.txt
      somap314_grundplanav_sw:
      - av_sw_big.txt
      somap314_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-standalone
    use-map-param-path: /io/data
  qgis314-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.14'
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap314_grundplanav_farbig:
      - av_f_big.txt
      somap314_grundplanav_sw:
      - av_sw_big.txt
      somap314_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis316-standalone:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.16'
    inherit: qgis314-standalone
    path-prefix: ''
    projects:
      somap314_grundplanav_farbig:
      - av_f_big.txt
      somap314_grundplanav_sw:
      - av_sw_big.txt
      somap314_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-standalone
    use-map-param-path: /io/data
  qgis316-stock:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.16'
    inherit: qgis310-stock
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