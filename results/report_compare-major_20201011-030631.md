# QGIS Benchmark summary compare-major (20201011-030631)


compare different version of QGIS servers using the same settings

_run completed in 6582.38s_

## Summary
| name               | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|--------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis218-stock      | Global  |      7121.88 |              0    |         11187 |            0 |     9807.1 |    5288.67 |      99.9 |   97.3    |          0 |
| qgis310-stock      | Global  |      7867.54 |             10.47 |         11187 |            0 |     9798.7 |    5153.03 |      94.5 |   74.0667 |          0 |
| qgis314-stock      | Global  |      8078.48 |             13.43 |         11187 |            0 |     9564.7 |    5049.4  |      97.1 |   73.5667 |          0 |
| qgis314-standalone | Global  |     41393.3  |            481.21 |         11187 |            0 |    19503.6 |   11631    |      99.1 |   58.3667 |          0 |

## Aggregated
| name                                             | group                    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|--------------------------------------------------|--------------------------|--------------|-------------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis218-stock > somap218_grundplanav_farbig      | somap_grundplanav_farbig |       668.65 |              0    |           735 |            0 |     4399.7 |     3949.6 |      99.4 |      96.1 |          0 |
| qgis310-stock > somap310_grundplanav_farbig      | somap_grundplanav_farbig |       740.61 |             10.76 |           735 |            0 |     5075.6 |     4333.5 |      94.5 |      74.8 |          0 |
| qgis314-stock > somap314_grundplanav_farbig      | somap_grundplanav_farbig |       786.99 |             17.7  |           735 |            0 |     4949.1 |     4191.6 |      97.1 |      73.5 |          0 |
| qgis314-standalone > somap314_grundplanav_farbig | somap_grundplanav_farbig |      8754.25 |           1209.24 |           735 |            0 |    13761.7 |    11769.6 |      99.1 |      53.8 |          0 |
| qgis218-stock > somap218_grundplanav_sw          | somap_grundplanav_sw     |      5030.92 |              0    |          5190 |            0 |     9807.1 |     7953.4 |      99.9 |      98   |          0 |
| qgis310-stock > somap310_grundplanav_sw          | somap_grundplanav_sw     |      5228.62 |              3.93 |          5190 |            0 |     9798.7 |     7563.8 |      93   |      73.9 |          0 |
| qgis314-stock > somap314_grundplanav_sw          | somap_grundplanav_sw     |      5388.4  |              7.11 |          5190 |            0 |     9564.7 |     7362.1 |      96.1 |      74   |          0 |
| qgis314-standalone > somap314_grundplanav_sw     | somap_grundplanav_sw     |     30724.9  |            510.72 |          5190 |            0 |    19503.6 |    18192.5 |      95.7 |      54.9 |          0 |
| qgis218-stock > somap218_lk                      | somap_lk                 |      1422.31 |              0    |          5262 |            0 |     5413   |     3963   |      99.9 |      97.8 |          0 |
| qgis310-stock > somap310_lk                      | somap_lk                 |      1898.31 |             33.47 |          5262 |            0 |     5313.3 |     3561.8 |      84.1 |      73.5 |          0 |
| qgis314-stock > somap314_lk                      | somap_lk                 |      1903.09 |             33.8  |          5262 |            0 |     5240.8 |     3594.5 |      86.9 |      73.2 |          0 |
| qgis314-standalone > somap314_lk                 | somap_lk                 |      1914.18 |             34.58 |          5262 |            0 |     6635.9 |     4931   |      91.5 |      66.4 |          0 |

## Detail
| name                                                                                                                                                                                                 | group                                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201011-030631/qgis218-stock/somap218_grundplanav_farbig/av_f_big.txt/dashboard/index.html)           | somap_grundplanav_farbig > av_f_big.txt |       668.65 |              0    |           735 |            0 |          0 |       909.729 |           700   |          220 |         9173 |        1590.8 |       1919    |       3106.52 |    10.7952   |               1889.24  |           4.75304  |     4399.7 |     3949.6 |     3330.4 |      99.4 |      96.1 |      25   |
| [qgis310-stock > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201011-030631/qgis310-stock/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)           | somap_grundplanav_farbig > av_f_big.txt |       740.61 |             10.76 |           735 |            0 |          0 |      1007.63  |           883   |          172 |         3892 |        1714.6 |       2017.2  |       3046.92 |     9.79047  |               1432.81  |           4.31067  |     5075.6 |     4333.5 |     2581   |      94.5 |      74.8 |      24.7 |
| [qgis314-stock > somap314_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201011-030631/qgis314-stock/somap314_grundplanav_farbig/av_f_big.txt/dashboard/index.html)           | somap_grundplanav_farbig > av_f_big.txt |       786.99 |             17.7  |           735 |            0 |          0 |      1070.74  |           964   |          205 |         3475 |        1815.4 |       2045.2  |       2798.28 |     9.2133   |               1348.28  |           4.05655  |     4949.1 |     4191.6 |     2722.9 |      97.1 |      73.5 |      25.2 |
| [qgis314-standalone > somap314_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201011-030631/qgis314-standalone/somap314_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |      8754.25 |           1209.24 |           735 |            0 |          0 |     11910.5   |           821   |          202 |       295553 |        8902.8 |      83606    |     219841    |     0.838844 |                117.41  |           0.380805 |    13761.7 |    11769.6 |     4177   |      99.1 |      53.8 |      12.6 |
| [qgis218-stock > somap218_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201011-030631/qgis218-stock/somap218_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                 | somap_grundplanav_sw > av_sw_big.txt    |      5030.92 |              0    |          5190 |            0 |          0 |       969.348 |           583.5 |          213 |        17796 |        2190.8 |       2713.9  |       5203.14 |    10.2073   |               3178.16  |           4.44555  |     9807.1 |     7953.4 |     3687   |      99.9 |      98   |      13.2 |
| [qgis310-stock > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201011-030631/qgis310-stock/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                 | somap_grundplanav_sw > av_sw_big.txt    |      5228.62 |              3.93 |          5190 |            0 |          0 |      1007.44  |           837   |          179 |         6213 |        1842.7 |       2321.35 |       3227.24 |     9.87037  |               2671.3   |           4.29882  |     9798.7 |     7563.8 |     4075.3 |      93   |      73.9 |      17.5 |
| [qgis314-stock > somap314_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201011-030631/qgis314-stock/somap314_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                 | somap_grundplanav_sw > av_sw_big.txt    |      5388.4  |              7.11 |          5190 |            0 |          0 |      1038.23  |           868.5 |          194 |         9622 |        1896.8 |       2346    |       3339.99 |     9.58482  |               2594.03  |           4.17446  |     9564.7 |     7362.1 |     3768.3 |      96.1 |      74   |      25.9 |
| [qgis314-standalone > somap314_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201011-030631/qgis314-standalone/somap314_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |     30724.9  |            510.72 |          5190 |            0 |          0 |      5920.02  |           724   |          191 |       363374 |        3201.5 |      50595.1  |     136177    |     1.66692  |                434.762 |           0.748778 |    19503.6 |    18192.5 |    11777.8 |      95.7 |      54.9 |      12.3 |
| [qgis218-stock > somap218_lk > lk_big.txt](../results/details/compare-major/20201011-030631/qgis218-stock/somap218_lk/lk_big.txt/dashboard/index.html)                                               | somap_lk > lk_big.txt                   |      1422.31 |              0    |          5262 |            0 |          0 |       270.298 |           146   |            5 |         2952 |         718   |       1032.85 |       1705.74 |    36.7056   |               1868.71  |          18.5933   |     5413   |     3963   |     2231.2 |      99.9 |      97.8 |      12   |
| [qgis310-stock > somap310_lk > lk_big.txt](../results/details/compare-major/20201011-030631/qgis310-stock/somap310_lk/lk_big.txt/dashboard/index.html)                                               | somap_lk > lk_big.txt                   |      1898.31 |             33.47 |          5262 |            0 |          0 |       360.758 |           189.5 |           31 |         2986 |         882.7 |       1179.4  |       1830.85 |    27.3355   |               1293.93  |          13.8469   |     5313.3 |     3561.8 |     2406.4 |      84.1 |      73.5 |      14.3 |
| [qgis314-stock > somap314_lk > lk_big.txt](../results/details/compare-major/20201011-030631/qgis314-stock/somap314_lk/lk_big.txt/dashboard/index.html)                                               | somap_lk > lk_big.txt                   |      1903.09 |             33.8  |          5262 |            0 |          0 |       361.667 |           210.5 |           34 |         4251 |         862   |       1170    |       1857.48 |    27.2955   |               1291.42  |          13.8266   |     5240.8 |     3594.5 |     2399.9 |      86.9 |      73.2 |      14.6 |
| [qgis314-standalone > somap314_lk > lk_big.txt](../results/details/compare-major/20201011-030631/qgis314-standalone/somap314_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |      1914.18 |             34.58 |          5262 |            0 |          0 |       363.775 |           194   |           35 |         4056 |         929.4 |       1296.65 |       2259.48 |    27.241    |               1285.97  |          14.1714   |     6635.9 |     4931   |     2482.8 |      91.5 |      66.4 |      16.5 |

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