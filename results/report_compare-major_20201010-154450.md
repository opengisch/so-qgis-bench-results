# QGIS Benchmark summary compare-major (20201010-154450)


compare different version of QGIS servers using the same settings

_run completed in 6757.35s_

## Summary
| name               |   duration s |   penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|--------------------|--------------|-------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis310-stock      |      7905.87 |        0    |         11197 |            0 |     9516.6 |    5125.4  |      95.6 |   73.1    |       0    |
| qgis218-stock      |      8013.86 |        1.37 |         11197 |           10 |     9630.9 |    5194.13 |      99.9 |   90.8    |       0.09 |
| qgis314-stock      |      8043.2  |        1.74 |         11197 |            0 |     9566.9 |    5129.17 |      99.1 |   72.4    |       0    |
| qgis314-standalone |     41608.6  |      426.3  |         11197 |            0 |    21667   |   12582.2  |      96.2 |   57.7333 |       0    |

## Aggregated
| name                                             |   duration s |   penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|--------------------------------------------------|--------------|-------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis218-stock > somap218_grundplanav_farbig      |       632.62 |        0    |           735 |            0 |     4168.4 |     3704.4 |      99.1 |      94.9 |       0    |
| qgis310-stock > somap310_grundplanav_farbig      |       761.18 |       20.32 |           735 |            0 |     5030.3 |     4277.8 |      95.6 |      72.9 |       0    |
| qgis314-stock > somap314_grundplanav_farbig      |       770.45 |       21.79 |           735 |            0 |     5018.9 |     4281.5 |      93.4 |      72.7 |       0    |
| qgis310-stock > somap310_lk                      |      1874.17 |      196.26 |          5272 |            0 |     5073.6 |     3619.4 |      95.6 |      72.8 |       0    |
| qgis314-stock > somap314_lk                      |      1903.61 |      200.91 |          5272 |            0 |     5804.5 |     3609.8 |      95.9 |      71.2 |       0    |
| qgis314-standalone > somap314_lk                 |      1908.89 |      201.74 |          5272 |            0 |     7934.9 |     5094.5 |      80.1 |      65.7 |       0    |
| qgis218-stock > somap218_lk                      |      2340.68 |      270    |          5272 |           10 |     5150.8 |     4108.5 |      99.9 |      79.4 |       0.19 |
| qgis218-stock > somap218_grundplanav_sw          |      5040.56 |      696.78 |          5190 |            0 |     9630.9 |     7769.5 |      99.9 |      98.1 |       0    |
| qgis310-stock > somap310_grundplanav_sw          |      5270.52 |      733.13 |          5190 |            0 |     9516.6 |     7479   |      94.5 |      73.6 |       0    |
| qgis314-stock > somap314_grundplanav_sw          |      5369.14 |      748.71 |          5190 |            0 |     9566.9 |     7496.2 |      99.1 |      73.3 |       0    |
| qgis314-standalone > somap314_grundplanav_farbig |      8842.25 |     1297.72 |           735 |            0 |    16385.6 |    12395.4 |      96.2 |      52.9 |       0    |
| qgis314-standalone > somap314_grundplanav_sw     |     30857.5  |     4777.73 |          5190 |            0 |    21667   |    20256.8 |      93.6 |      54.6 |       0    |

## Detail
| name                                                                                                                                                                                                 |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201010-154450/qgis218-stock/somap218_grundplanav_farbig/av_f_big.txt/dashboard/index.html)           |       632.62 |        0    |           735 |            0 |   0        |       860.706 |           670   |          227 |         9230 |        1457.6 |       1903.4  |       3210.56 |    11.1905   |               1958.78  |           4.92708  |     4168.4 |     3704.4 |     3081.7 |      99.1 |      94.9 |      17.8 |
| [qgis310-stock > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201010-154450/qgis310-stock/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)           |       761.18 |       20.32 |           735 |            0 |   0        |      1035.62  |           865   |          190 |         4464 |        1806   |       2018    |       3615.52 |     9.5332   |               1395.14  |           4.1974   |     5030.3 |     4277.8 |     2616.5 |      95.6 |      72.9 |      25.5 |
| [qgis314-stock > somap314_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201010-154450/qgis314-stock/somap314_grundplanav_farbig/av_f_big.txt/dashboard/index.html)           |       770.45 |       21.79 |           735 |            0 |   0        |      1048.23  |           936   |          177 |         3799 |        1809.6 |       2035.6  |       2697.68 |     9.39994  |               1375.59  |           4.13873  |     5018.9 |     4281.5 |     2748.7 |      93.4 |      72.7 |      29   |
| [qgis310-stock > somap310_lk > lk_big.txt](../results/details/compare-major/20201010-154450/qgis310-stock/somap310_lk/lk_big.txt/dashboard/index.html)                                               |      1874.17 |      196.26 |          5272 |            0 |   0        |       355.494 |           184   |           28 |         3528 |         896.7 |       1191.35 |       1819.62 |    27.7952   |               1325.83  |          14.0804   |     5073.6 |     3619.4 |     2472.2 |      95.6 |      72.8 |      14.2 |
| [qgis314-stock > somap314_lk > lk_big.txt](../results/details/compare-major/20201010-154450/qgis314-stock/somap314_lk/lk_big.txt/dashboard/index.html)                                               |      1903.61 |      200.91 |          5272 |            0 |   0        |       361.079 |           193   |           32 |         3056 |         867   |       1137.35 |       1884.07 |    27.3059   |               1301.79  |          13.8325   |     5804.5 |     3609.8 |     2380.4 |      95.9 |      71.2 |      12.9 |
| [qgis314-standalone > somap314_lk > lk_big.txt](../results/details/compare-major/20201010-154450/qgis314-standalone/somap314_lk/lk_big.txt/dashboard/index.html)                                     |      1908.89 |      201.74 |          5272 |            0 |   0        |       362.081 |           201   |           33 |         4480 |         915.7 |       1245.7  |       2158.86 |    27.2029   |               1294.03  |          14.1523   |     7934.9 |     5094.5 |     2395.6 |      80.1 |      65.7 |      12.8 |
| [qgis218-stock > somap218_lk > lk_big.txt](../results/details/compare-major/20201010-154450/qgis218-stock/somap218_lk/lk_big.txt/dashboard/index.html)                                               |      2340.68 |      270    |          5272 |           10 |   0.189681 |       443.984 |           134.5 |            5 |        90094 |         733   |       1029.35 |       2064.27 |    17.6628   |                897.504 |           8.94759  |     5150.8 |     4108.5 |     2281.8 |      99.9 |      79.4 |       0.3 |
| [qgis218-stock > somap218_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201010-154450/qgis218-stock/somap218_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                 |      5040.56 |      696.78 |          5190 |            0 |   0        |       971.207 |           582   |          209 |        16905 |        2202.7 |       2726.8  |       5383.54 |    10.1959   |               3174.67  |           4.4406   |     9630.9 |     7769.5 |     3505   |      99.9 |      98.1 |      13.2 |
| [qgis310-stock > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201010-154450/qgis310-stock/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                 |      5270.52 |      733.13 |          5190 |            0 |   0        |      1015.51  |           837   |          178 |         8909 |        1887.9 |       2317.45 |       3246.54 |     9.8039   |               2653.39  |           4.26987  |     9516.6 |     7479   |     3912.8 |      94.5 |      73.6 |      24.4 |
| [qgis314-stock > somap314_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201010-154450/qgis314-stock/somap314_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                 |      5369.14 |      748.71 |          5190 |            0 |   0        |      1034.52  |           861.5 |          194 |         6883 |        1896.9 |       2330    |       3367.44 |     9.61043  |               2600.91  |           4.18561  |     9566.9 |     7496.2 |     3955.8 |      99.1 |      73.3 |      13.2 |
| [qgis314-standalone > somap314_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201010-154450/qgis314-standalone/somap314_grundplanav_farbig/av_f_big.txt/dashboard/index.html) |      8842.25 |     1297.72 |           735 |            0 |   0        |     12030.3   |           777   |          193 |       324520 |       28389.6 |      76053.8  |     228018    |     0.830431 |                116.231 |           0.376986 |    16385.6 |    12395.4 |     4227.3 |      96.2 |      52.9 |      12.5 |
| [qgis314-standalone > somap314_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201010-154450/qgis314-standalone/somap314_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       |     30857.5  |     4777.73 |          5190 |            0 |   0        |      5945.56  |           733   |          190 |       388882 |        3146.7 |      21731.1  |     138266    |     1.65985  |                432.919 |           0.745604 |    21667   |    20256.8 |    15148.1 |      93.6 |      54.6 |      12.3 |

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

  qgis314-standalone:
    active: yes
    inherit: qgis314-stock
    template: docker-compose-qgis-3-standalone
    path-prefix: ''
    use-map-param-path: '/io/data'

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

```