# QGIS Benchmark summary compare-major (20201016-084921)


compare different version of QGIS servers using the same settings

_run completed in 03h 06m 28s_
## Summary plot
An interactive summary plot can be found [here](report_compare-major_20201016-084921_plot.html)

## Summary
| name                | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock       | Global  |       7445.7 |               0   |         11187 |            0 |     9610.4 |    6140.13 |     3379.3 |      99.9 |   97.7    |       7.6 |          0 |
| qgis310-stock       | Global  |       8168.3 |               9.7 |         11187 |            0 |     9225   |    5353.83 |     2814   |      99.4 |   73.8333 |      14.2 |          0 |
| qgis314-stock       | Global  |       8357.1 |              12.2 |         11187 |            0 |     9151.3 |    5360.53 |     2873.4 |      96.9 |   73.4333 |      14.5 |          0 |
| qgis3dev-standalone | Global  |      42569.7 |             471.7 |         11187 |            0 |    21390.7 |   12564.2  |     2822.8 |      99.1 |   58.9    |      12.4 |          0 |
| qgis314-standalone  | Global  |      43612.9 |             485.7 |         11187 |            0 |    20368.5 |   11819.9  |     2843.3 |      99.1 |   57.3667 |      12.3 |          0 |

## Aggregated
| name                                              | group                    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------------------------------------------|--------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218_grundplanav_farbig       | somap_grundplanav_farbig |        677.1 |               0   |           735 |            0 |     5454.9 |     5029.1 |     4484.2 |      99.2 |      97.1 |      27.2 |          0 |
| qgis310-stock > somap310_grundplanav_farbig       | somap_grundplanav_farbig |        790.6 |              16.8 |           735 |            0 |     5303.4 |     4633.4 |     3130.7 |      92.4 |      73.6 |      24.4 |          0 |
| qgis314-stock > somap314_grundplanav_farbig       | somap_grundplanav_farbig |        808.7 |              19.4 |           735 |            0 |     5357.8 |     4617.7 |     3150.5 |      96.9 |      73.4 |      24.9 |          0 |
| qgis3dev-standalone > somap314_grundplanav_farbig | somap_grundplanav_farbig |       8971.1 |            1224.9 |           735 |            0 |    16498.2 |    12318.4 |     3921.3 |      99.1 |      54.1 |      12.6 |          0 |
| qgis314-standalone > somap314_grundplanav_farbig  | somap_grundplanav_farbig |       9573.6 |            1313.9 |           735 |            0 |    14765.8 |    12022.9 |     4318.7 |      97.9 |      50.5 |      12.4 |          0 |
| qgis218-stock > somap218_grundplanav_sw           | somap_grundplanav_sw     |       5287.4 |               0   |          5190 |            0 |     9610.4 |     8400.2 |     4803.4 |      99.9 |      98.1 |      13.2 |          0 |
| qgis310-stock > somap310_grundplanav_sw           | somap_grundplanav_sw     |       5443.5 |               3   |          5190 |            0 |     9225   |     7405.2 |     4219   |      99.4 |      74.1 |      26.7 |          0 |
| qgis314-stock > somap314_grundplanav_sw           | somap_grundplanav_sw     |       5581.8 |               5.6 |          5190 |            0 |     9151.3 |     7416.6 |     4264.1 |      96.9 |      74.1 |      25.6 |          0 |
| qgis3dev-standalone > somap314_grundplanav_sw     | somap_grundplanav_sw     |      31626.4 |             498.1 |          5190 |            0 |    21390.7 |    20141.9 |    14863.4 |      98.9 |      55.8 |      12.4 |          0 |
| qgis314-standalone > somap314_grundplanav_sw      | somap_grundplanav_sw     |      32069.1 |             506.5 |          5190 |            0 |    20368.5 |    18246   |    12477.1 |      99.1 |      54.9 |      12.3 |          0 |
| qgis218-stock > somap218_lk                       | somap_lk                 |       1481.2 |               0   |          5262 |            0 |     6493.5 |     4991.1 |     3379.3 |      99.8 |      97.9 |       7.6 |          0 |
| qgis310-stock > somap310_lk                       | somap_lk                 |       1934.2 |              30.6 |          5262 |            0 |     6022.2 |     4022.9 |     2814   |      82.9 |      73.8 |      14.2 |          0 |
| qgis314-stock > somap314_lk                       | somap_lk                 |       1966.6 |              32.8 |          5262 |            0 |     6368.4 |     4047.3 |     2873.4 |      81   |      72.8 |      14.5 |          0 |
| qgis314-standalone > somap314_lk                  | somap_lk                 |       1970.3 |              33   |          5262 |            0 |     6955.5 |     5190.8 |     2843.3 |      91.2 |      66.7 |      15.9 |          0 |
| qgis3dev-standalone > somap314_lk                 | somap_lk                 |       1972.2 |              33.1 |          5262 |            0 |     7268.8 |     5232.2 |     2822.8 |      96.9 |      66.8 |      17.5 |          0 |

## Detail
| name                                                                                                                                                                                                   | group                                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201016-084921/qgis218-stock/somap218_grundplanav_farbig/av_f_big.txt/dashboard/index.html)             | somap_grundplanav_farbig > av_f_big.txt |        677.1 |               0   |           735 |            0 |          0 |       921.259 |           736   |          222 |         9472 |        1580   |       1919.8  |       3411.56 |     10.6771  |               1868.77  |           4.70104  |     5454.9 |     5029.1 |     4484.2 |      99.2 |      97.1 |      27.2 |
| [qgis310-stock > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201016-084921/qgis310-stock/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)             | somap_grundplanav_farbig > av_f_big.txt |        790.6 |              16.8 |           735 |            0 |          0 |      1075.61  |          1004   |          191 |         3714 |        1723.8 |       2087.2  |       3412.6  |      9.18773 |               1344.59  |           4.04529  |     5303.4 |     4633.4 |     3130.7 |      92.4 |      73.6 |      24.4 |
| [qgis314-stock > somap314_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201016-084921/qgis314-stock/somap314_grundplanav_farbig/av_f_big.txt/dashboard/index.html)             | somap_grundplanav_farbig > av_f_big.txt |        808.7 |              19.4 |           735 |            0 |          0 |      1100.26  |           970   |          184 |         4242 |        1893.6 |       2184.8  |       3251.96 |      8.96199 |               1311.49  |           3.9459   |     5357.8 |     4617.7 |     3150.5 |      96.9 |      73.4 |      24.9 |
| [qgis3dev-standalone > somap314_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201016-084921/qgis3dev-standalone/somap314_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |       8971.1 |            1224.9 |           735 |            0 |          0 |     12205.6   |           877   |          211 |       295379 |       41087.2 |      87238.2  |     177680    |      0.81856 |                114.57  |           0.371597 |    16498.2 |    12318.4 |     3921.3 |      99.1 |      54.1 |      12.6 |
| [qgis314-standalone > somap314_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201016-084921/qgis314-standalone/somap314_grundplanav_farbig/av_f_big.txt/dashboard/index.html)   | somap_grundplanav_farbig > av_f_big.txt |       9573.6 |            1313.9 |           735 |            0 |          0 |     13025.3   |           860   |          173 |       433288 |        4939.4 |      88184.4  |     252290    |      0.76706 |                107.362 |           0.348218 |    14765.8 |    12022.9 |     4318.7 |      97.9 |      50.5 |      12.4 |
| [qgis218-stock > somap218_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201016-084921/qgis218-stock/somap218_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                   | somap_grundplanav_sw > av_sw_big.txt    |       5287.4 |               0   |          5190 |            0 |          0 |      1018.77  |           612.5 |          214 |        18140 |        2269.8 |       2783.25 |       5610.45 |      9.7197  |               3026.54  |           4.2332   |     9610.4 |     8400.2 |     4803.4 |      99.9 |      98.1 |      13.2 |
| [qgis310-stock > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201016-084921/qgis310-stock/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                   | somap_grundplanav_sw > av_sw_big.txt    |       5443.5 |               3   |          5190 |            0 |          0 |      1048.84  |           878   |          181 |         6909 |        1925.9 |       2430.45 |       3406.62 |      9.4899  |               2568.44  |           4.13312  |     9225   |     7405.2 |     4219   |      99.4 |      74.1 |      26.7 |
| [qgis314-stock > somap314_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201016-084921/qgis314-stock/somap314_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                   | somap_grundplanav_sw > av_sw_big.txt    |       5581.8 |               5.6 |          5190 |            0 |          0 |      1075.49  |           892.5 |          199 |         6976 |        1979   |       2448.9  |       3506.98 |      9.24718 |               2502.63  |           4.02741  |     9151.3 |     7416.6 |     4264.1 |      96.9 |      74.1 |      25.6 |
| [qgis3dev-standalone > somap314_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201016-084921/qgis3dev-standalone/somap314_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |      31626.4 |             498.1 |          5190 |            0 |          0 |      6093.72  |           766.5 |          194 |       287768 |        3168.6 |      10421.3  |     145099    |      1.61944 |                422.366 |           0.727452 |    21390.7 |    20141.9 |    14863.4 |      98.9 |      55.8 |      12.4 |
| [qgis314-standalone > somap314_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201016-084921/qgis314-standalone/somap314_grundplanav_sw/av_sw_big.txt/dashboard/index.html)         | somap_grundplanav_sw > av_sw_big.txt    |      32069.1 |             506.5 |          5190 |            0 |          0 |      6179.01  |           748   |          193 |       291808 |        3320.1 |      29167.1  |     144125    |      1.61094 |                420.157 |           0.723636 |    20368.5 |    18246   |    12477.1 |      99.1 |      54.9 |      12.3 |
| [qgis218-stock > somap218_lk > lk_big.txt](../results/details/compare-major/20201016-084921/qgis218-stock/somap218_lk/lk_big.txt/dashboard/index.html)                                                 | somap_lk > lk_big.txt                   |       1481.2 |               0   |          5262 |            0 |          0 |       281.484 |           150   |            5 |         7696 |         737   |       1054.4  |       1832.48 |     35.249   |               1794.57  |          17.8555   |     6493.5 |     4991.1 |     3379.3 |      99.8 |      97.9 |       7.6 |
| [qgis310-stock > somap310_lk > lk_big.txt](../results/details/compare-major/20201016-084921/qgis310-stock/somap310_lk/lk_big.txt/dashboard/index.html)                                                 | somap_lk > lk_big.txt                   |       1934.2 |              30.6 |          5262 |            0 |          0 |       367.588 |           190   |           30 |         4129 |         936   |       1194.85 |       1836.03 |     26.88    |               1272.39  |          13.6162   |     6022.2 |     4022.9 |     2814   |      82.9 |      73.8 |      14.2 |
| [qgis314-stock > somap314_lk > lk_big.txt](../results/details/compare-major/20201016-084921/qgis314-stock/somap314_lk/lk_big.txt/dashboard/index.html)                                                 | somap_lk > lk_big.txt                   |       1966.6 |              32.8 |          5262 |            0 |          0 |       373.74  |           212   |           36 |         3558 |         889.7 |       1193.7  |       1980.11 |     26.4031  |               1249.21  |          13.3746   |     6368.4 |     4047.3 |     2873.4 |      81   |      72.8 |      14.5 |
| [qgis314-standalone > somap314_lk > lk_big.txt](../results/details/compare-major/20201016-084921/qgis314-standalone/somap314_lk/lk_big.txt/dashboard/index.html)                                       | somap_lk > lk_big.txt                   |       1970.3 |              33   |          5262 |            0 |          0 |       374.433 |           202   |           34 |         3781 |         927   |       1312    |       2364.22 |     26.4158  |               1247.06  |          13.7422   |     6955.5 |     5190.8 |     2843.3 |      91.2 |      66.7 |      15.9 |
| [qgis3dev-standalone > somap314_lk > lk_big.txt](../results/details/compare-major/20201016-084921/qgis3dev-standalone/somap314_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |       1972.2 |              33.1 |          5262 |            0 |          0 |       374.793 |           206   |           35 |         4015 |         927.4 |       1289.55 |       2360.22 |     26.4188  |               1247.19  |          13.7438   |     7268.8 |     5232.2 |     2822.8 |      96.9 |      66.8 |      17.5 |

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

  qgis3dev-standalone:
    active: yes
    inherit: qgis314-standalone
    compose-variables:
      QGIS_VERSION: 'latest'


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
  qgis3dev-standalone:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: latest
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

```