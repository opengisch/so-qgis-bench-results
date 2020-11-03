# QGIS Benchmark summary compare-major (20201103-060144)


compare different version of QGIS servers using the same settings

_run completed in 00h 03m 54s_

_Sample size per configuration 72_
## Summary plot
An interactive summary plot can be found [here](report_compare-major_20201103-060144_plot.html)

## Summary
| name    | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316 | Global  |                 25.9 | +0.0%                        |           62.1 | +0.0%                  |          2139   | +0.0%                   |           68 |         7324 |              9.7 |            72 |            0 |     3316.4 |    3111.2  |     2828.3 |      97.5 |   64.9    |      24.4 |          0 |
| qgis218 | Global  |                 26.9 | +3.9%                        |           69.8 | +12.4%                 |          2785   | +30.2%                  |          570 |         7752 |             11.2 |            72 |            0 |     3315.4 |    2920.37 |     2548   |      98.5 |   60.5    |       1.3 |          0 |
| qgis314 | Global  |                 27.5 | +6.2%                        |           79.3 | +27.8%                 |          3129   | +46.3%                  |          546 |         7127 |              9.7 |            72 |            0 |     3951.5 |    3067.2  |     2687.9 |      95.1 |   51.6    |      16.7 |          0 |
| qgis310 | Global  |                 27.8 | +7.3%                        |           84   | +35.4%                 |          3489.5 | +63.1%                  |          565 |         8308 |              9.7 |            72 |            0 |     4240.1 |    2981.33 |     2617.4 |      95.6 |   57.1667 |      16.2 |          0 |

## Aggregated
| name                                  | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316 > somap316_grundplanav_farbig | somap_grundplanav_farbig |                  9.4 | +0.0%                        |           32.2 | +3.5%                  |          1298   | +9.3%                   |            8 |         2783 |              2.8 |            22 |            0 |     3316.4 |     3146.4 |     2828.3 |      97.5 |      71.5 |      31   |          0 |
| qgis218 > somap218_grundplanav_farbig | somap_grundplanav_farbig |                 10   | +6.4%                        |           31.1 | +0.0%                  |          1187.5 | +0.0%                   |          220 |         3649 |              3.4 |            22 |            0 |     3065.8 |     2938   |     2794.7 |      97   |      71   |      29.1 |          0 |
| qgis314 > somap314_grundplanav_farbig | somap_grundplanav_farbig |                 10.8 | +14.9%                       |           39.8 | +27.6%                 |          1671.5 | +40.8%                  |          223 |         3116 |              2.8 |            22 |            0 |     3951.5 |     3340.5 |     2887.8 |      95.1 |      70.4 |      29   |          0 |
| qgis310 > somap310_grundplanav_farbig | somap_grundplanav_farbig |                 11   | +17.0%                       |           41.7 | +33.8%                 |          1729.5 | +45.6%                  |          195 |         3556 |              2.8 |            22 |            0 |     4240.1 |     3336.1 |     2703   |      94.2 |      67.8 |      29.7 |          0 |
| qgis218 > somap218_grundplanav_sw     | somap_grundplanav_sw     |                  9.1 | +0.0%                        |           27.7 | +14.4%                 |          1445.5 | +103.9%                 |          229 |         2935 |              7   |            20 |            0 |     3315.4 |     3225.9 |     3159.1 |      98.5 |      73.8 |      29.8 |          0 |
| qgis314 > somap314_grundplanav_sw     | somap_grundplanav_sw     |                  9.9 | +8.8%                        |           31.8 | +31.3%                 |          1227.5 | +73.1%                  |          228 |         3360 |              6.1 |            20 |            0 |     3705.1 |     3173.2 |     2915.4 |      90   |      67.7 |      28.2 |          0 |
| qgis310 > somap310_grundplanav_sw     | somap_grundplanav_sw     |                 10   | +9.9%                        |           33.8 | +39.5%                 |          1547   | +118.2%                 |          269 |         3904 |              6.1 |            20 |            0 |     3193.3 |     2953.5 |     2767.9 |      95.6 |      66.6 |      24.7 |          0 |
| qgis316 > somap316_grundplanav_sw     | somap_grundplanav_sw     |                 10.1 | +11.0%                       |           24.2 | +0.0%                  |           709   | +0.0%                   |           28 |         3918 |              6.1 |            20 |            0 |     3289.6 |     3076   |     2881.2 |      93.7 |      58.3 |      24.4 |          0 |
| qgis316 > somap316_lk                 | somap_lk                 |                  6.4 | +0.0%                        |            5.6 | +0.0%                  |           132   | +0.0%                   |           32 |          623 |              0.8 |            30 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis310 > somap310_lk                 | somap_lk                 |                  6.8 | +6.2%                        |            8.5 | +53.4%                 |           213   | +61.4%                  |          101 |          848 |              0.8 |            30 |            0 |     2691.4 |     2654.4 |     2617.4 |      58.1 |      37.1 |      16.2 |          0 |
| qgis314 > somap314_lk                 | somap_lk                 |                  6.8 | +6.2%                        |            7.7 | +38.8%                 |           230   | +74.2%                  |           95 |          651 |              0.8 |            30 |            0 |     2687.9 |     2687.9 |     2687.9 |      16.7 |      16.7 |      16.7 |          0 |
| qgis218 > somap218_lk                 | somap_lk                 |                  7.8 | +21.9%                       |           10.9 | +95.4%                 |           152   | +15.2%                  |          121 |         1168 |              0.8 |            30 |            0 |     2646.3 |     2597.2 |     2548   |      72.2 |      36.7 |       1.3 |          0 |

## Detail
| name                                                                                                                                                                   | group                               |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316 > somap316_grundplanav_farbig > av_f.txt](../results/details/compare-major/20201103-060144/qgis316/somap316_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |                  9.4 | +0.0%                        |           32.2 | +3.5%                  |          1298   | +9.3%                   |            22 |            0 |          0 |      1465.91  |            8 |         2783 |        2627.9 |       2760.05 |          2783 |      5.54575 |                723.169 |            2.36325 |              2.8 |     3316.4 |     3146.4 |     2828.3 |      97.5 |      71.5 |      31   |
| [qgis218 > somap218_grundplanav_farbig > av_f.txt](../results/details/compare-major/20201103-060144/qgis218/somap218_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |                 10   | +6.4%                        |           31.1 | +0.0%                  |          1187.5 | +0.0%                   |            22 |            0 |          0 |      1415.86  |          220 |         3649 |        3140.8 |       3578.35 |          3649 |      4.99546 |                790.114 |            2.12875 |              3.4 |     3065.8 |     2938   |     2794.7 |      97   |      71   |      29.1 |
| [qgis314 > somap314_grundplanav_farbig > av_f.txt](../results/details/compare-major/20201103-060144/qgis314/somap314_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |                 10.8 | +14.9%                       |           39.8 | +27.6%                 |          1671.5 | +40.8%                  |            22 |            0 |          0 |      1806.82  |          223 |         3116 |        3036.2 |       3115.55 |          3116 |      4.1841  |                545.546 |            1.783   |              2.8 |     3951.5 |     3340.5 |     2887.8 |      95.1 |      70.4 |      29   |
| [qgis310 > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-major/20201103-060144/qgis310/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |                 11   | +17.0%                       |           41.7 | +33.8%                 |          1729.5 | +45.6%                  |            22 |            0 |          0 |      1894.05  |          195 |         3556 |        3383.2 |       3542.95 |          3556 |      3.98406 |                519.491 |            1.69775 |              2.8 |     4240.1 |     3336.1 |     2703   |      94.2 |      67.8 |      29.7 |
| [qgis218 > somap218_grundplanav_sw > av_sw.txt](../results/details/compare-major/20201103-060144/qgis218/somap218_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |                  9.1 | +0.0%                        |           27.7 | +14.4%                 |          1445.5 | +103.9%                 |            20 |            0 |          0 |      1386.7   |          229 |         2935 |        2729.2 |       2926.05 |          2935 |      5.47345 |               1962.03  |            2.29201 |              7   |     3315.4 |     3225.9 |     3159.1 |      98.5 |      73.8 |      29.8 |
| [qgis314 > somap314_grundplanav_sw > av_sw.txt](../results/details/compare-major/20201103-060144/qgis314/somap314_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |                  9.9 | +8.8%                        |           31.8 | +31.3%                 |          1227.5 | +73.1%                  |            20 |            0 |          0 |      1591.5   |          228 |         3360 |        3055.2 |       3346.15 |          3360 |      4.6436  |               1444.81  |            1.94451 |              6.1 |     3705.1 |     3173.2 |     2915.4 |      90   |      67.7 |      28.2 |
| [qgis310 > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-major/20201103-060144/qgis310/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |                 10   | +9.9%                        |           33.8 | +39.5%                 |          1547   | +118.2%                 |            20 |            0 |          0 |      1690.75  |          269 |         3904 |        3764.9 |       3901.35 |          3904 |      4.53618 |               1411.42  |            1.89952 |              6.1 |     3193.3 |     2953.5 |     2767.9 |      95.6 |      66.6 |      24.7 |
| [qgis316 > somap316_grundplanav_sw > av_sw.txt](../results/details/compare-major/20201103-060144/qgis316/somap316_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |                 10.1 | +11.0%                       |           24.2 | +0.0%                  |           709   | +0.0%                   |            20 |            0 |          0 |      1212     |           28 |         3918 |        3010   |       3876.3  |          3918 |      4.40335 |               1369.59  |            1.8439  |              6.1 |     3289.6 |     3076   |     2881.2 |      93.7 |      58.3 |      24.4 |
| [qgis316 > somap316_lk > lk.txt](../results/details/compare-major/20201103-060144/qgis316/somap316_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |                  6.4 | +0.0%                        |            5.6 | +0.0%                  |           132   | +0.0%                   |            30 |            0 |          0 |       185.5   |           32 |          623 |         596.1 |        612    |           623 |     31.8471  |                863.213 |           12.9918  |              0.8 |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis310 > somap310_lk > lk.txt](../results/details/compare-major/20201103-060144/qgis310/somap310_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |                  6.8 | +6.2%                        |            8.5 | +53.4%                 |           213   | +61.4%                  |            30 |            0 |          0 |       284.567 |          101 |          848 |         816.6 |        838.1  |           848 |     23.7906  |                644.889 |            9.70522 |              0.8 |     2691.4 |     2654.4 |     2617.4 |      58.1 |      37.1 |      16.2 |
| [qgis314 > somap314_lk > lk.txt](../results/details/compare-major/20201103-060144/qgis314/somap314_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |                  6.8 | +6.2%                        |            7.7 | +38.8%                 |           230   | +74.2%                  |            30 |            0 |          0 |       257.467 |           95 |          651 |         626.1 |        642.2  |           651 |     24.9792  |                676.936 |           10.1901  |              0.8 |     2687.9 |     2687.9 |     2687.9 |      16.7 |      16.7 |      16.7 |
| [qgis218 > somap218_lk > lk.txt](../results/details/compare-major/20201103-060144/qgis218/somap218_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |                  7.8 | +21.9%                       |           10.9 | +95.4%                 |           152   | +15.2%                  |            30 |            0 |          0 |       362.5   |          121 |         1168 |        1148.8 |       1166.35 |          1168 |     16.0428  |                435.407 |            6.54454 |              0.8 |     2646.3 |     2597.2 |     2548   |      72.2 |      36.7 |       1.3 |

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
        - lk.txt
      somap218_grundplanav_farbig:
        - av_f.txt
      somap218_grundplanav_sw:
        - av_sw.txt

  qgis310:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_lk:
        - lk.txt
      somap310_grundplanav_farbig:
        - av_f.txt
      somap310_grundplanav_sw:
        - av_sw.txt

  qgis314:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_lk:
        - lk.txt
      somap314_grundplanav_farbig:
        - av_f.txt
      somap314_grundplanav_sw:
        - av_sw.txt

  qgis316:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.16'
    projects:
      somap316_lk:
        - lk.txt
      somap316_grundplanav_farbig:
        - av_f.txt
      somap316_grundplanav_sw:
        - av_sw.txt
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
      - av_f.txt
      somap218_grundplanav_sw:
      - av_sw.txt
      somap218_lk:
      - lk.txt
    template: docker-compose-qgis-2
  qgis310:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: base
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis314:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.14'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap314_grundplanav_farbig:
      - av_f.txt
      somap314_grundplanav_sw:
      - av_sw.txt
      somap314_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx
  qgis316:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.16'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap316_grundplanav_farbig:
      - av_f.txt
      somap316_grundplanav_sw:
      - av_sw.txt
      somap316_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```