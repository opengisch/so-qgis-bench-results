# QGIS Benchmark summary compare-major (20201027-125415)


compare different version of QGIS servers using the same settings

_run completed in 00h 09m 05s_
## Summary plot
An interactive summary plot can be found [here](report_compare-major_20201027-125415_plot.html)

## Summary
| name               | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock      | Global  |         78   |               0   |            72 |            0 |     3213.5 |    2749    |     2217.5 |      98.2 |   62.0333 |       0.7 |          0 |
| qgis316-stock      | Global  |         84.7 |               8.7 |            72 |            0 |     3284.2 |    2739.77 |     2397.5 |      98.9 |   61.3333 |      13.9 |          0 |
| qgis314-stock      | Global  |         99.7 |              27.9 |            72 |            0 |     3877.4 |    2795.33 |     2366.8 |      97.7 |   56.6333 |      13.7 |          0 |
| qgis310-stock      | Global  |        104.4 |              33.9 |            72 |            0 |     3719.1 |    2803.97 |     2462   |      99.1 |   53.0667 |      14.9 |          0 |
| qgis316-standalone | Global  |        773.6 |             892.4 |            72 |            0 |     6366.8 |    4292.4  |     2631.2 |      99   |   31.2333 |      14.1 |          0 |
| qgis314-standalone | Global  |       1137.7 |            1359.4 |            72 |            0 |     7935.3 |    4870.7  |     2416.1 |      98.6 |   35.3667 |      12.6 |          0 |

## Aggregated
| name                                             | group                    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------------------------------------|--------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218-stock > somap218_grundplanav_farbig      | somap_grundplanav_farbig |         31.1 |               0   |            22 |            0 |     2939.2 |     2785   |     2467   |      98.1 |      69.6 |      25.6 |          0 |
| qgis316-stock > somap316_grundplanav_farbig      | somap_grundplanav_farbig |         42.1 |              35.6 |            22 |            0 |     3284.2 |     2858.2 |     2593.4 |      98.9 |      72.8 |      28.8 |          0 |
| qgis314-stock > somap314_grundplanav_farbig      | somap_grundplanav_farbig |         50.7 |              63.3 |            22 |            0 |     3877.4 |     3055.5 |     2488   |      97.7 |      68.3 |      28.8 |          0 |
| qgis310-stock > somap310_grundplanav_farbig      | somap_grundplanav_farbig |         53.1 |              71.1 |            22 |            0 |     3719.1 |     3117.9 |     2587.6 |      94.1 |      71.6 |      27.6 |          0 |
| qgis314-standalone > somap314_grundplanav_farbig | somap_grundplanav_farbig |        397.8 |            1180.8 |            22 |            0 |     5341.6 |     4506.2 |     2546.3 |      97.5 |      28.9 |      12.6 |          0 |
| qgis316-standalone > somap314_grundplanav_farbig | somap_grundplanav_farbig |        438.3 |            1311.3 |            22 |            0 |     4858.1 |     4228.7 |     2648.9 |      99   |      29.8 |      26.2 |          0 |
| qgis218-stock > somap218_grundplanav_sw          | somap_grundplanav_sw     |         31.4 |               0   |            20 |            0 |     3213.5 |     3088.7 |     2980.3 |      98.2 |      71.6 |      27.8 |          0 |
| qgis316-stock > somap316_grundplanav_sw          | somap_grundplanav_sw     |         35.6 |              13.4 |            20 |            0 |     3153.8 |     2868.6 |     2722.4 |      95.4 |      73.3 |      30.2 |          0 |
| qgis314-stock > somap314_grundplanav_sw          | somap_grundplanav_sw     |         39.5 |              25.9 |            20 |            0 |     3101.8 |     2884.6 |     2669.1 |      95.5 |      65.4 |      24.2 |          0 |
| qgis310-stock > somap310_grundplanav_sw          | somap_grundplanav_sw     |         41.1 |              30.7 |            20 |            0 |     3197.2 |     2832   |     2688.6 |      99.1 |      72.7 |      27.9 |          0 |
| qgis316-standalone > somap314_grundplanav_sw     | somap_grundplanav_sw     |        327.1 |             940.9 |            20 |            0 |     6366.8 |     6017.3 |     4233.8 |      94.1 |      39.7 |      14.1 |          0 |
| qgis314-standalone > somap314_grundplanav_sw     | somap_grundplanav_sw     |        729.2 |            2220.4 |            20 |            0 |     7935.3 |     7584.5 |     5369   |      98.6 |      38.9 |      12.7 |          0 |
| qgis316-stock > somap316_lk                      | somap_lk                 |          7   |               0   |            30 |            0 |     2587.4 |     2492.5 |     2397.5 |      61.9 |      37.9 |      13.9 |          0 |
| qgis316-standalone > somap314_lk                 | somap_lk                 |          8.2 |              17.8 |            30 |            0 |     2631.2 |     2631.2 |     2631.2 |      24.2 |      24.2 |      24.2 |          0 |
| qgis314-stock > somap314_lk                      | somap_lk                 |          9.4 |              35.3 |            30 |            0 |     2524.9 |     2445.9 |     2366.8 |      58.7 |      36.2 |      13.7 |          0 |
| qgis310-stock > somap310_lk                      | somap_lk                 |         10.2 |              45.8 |            30 |            0 |     2462   |     2462   |     2462   |      14.9 |      14.9 |      14.9 |          0 |
| qgis314-standalone > somap314_lk                 | somap_lk                 |         10.7 |              53.6 |            30 |            0 |     2626.7 |     2521.4 |     2416.1 |      60.3 |      38.3 |      16.2 |          0 |
| qgis218-stock > somap218_lk                      | somap_lk                 |         15.5 |             122.2 |            30 |            0 |     2490.4 |     2373.3 |     2217.5 |      67.8 |      44.9 |       0.7 |          0 |

## Detail
| name                                                                                                                                                                                         | group                               |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218-stock > somap218_grundplanav_farbig > av_f.txt](../results/details/compare-major/20201027-125415/qgis218-stock/somap218_grundplanav_farbig/av_f.txt/dashboard/index.html)           | somap_grundplanav_farbig > av_f.txt |         31.1 |               0   |            22 |            0 |          0 |      1411.77  |          1312   |          241 |         3301 |        2826.8 |       3277.3  |          3301 |     5.23934  |               828.351  |          2.23267   |     2939.2 |     2785   |     2467   |      98.1 |      69.6 |      25.6 |
| [qgis316-stock > somap316_grundplanav_farbig > av_f.txt](../results/details/compare-major/20201027-125415/qgis316-stock/somap316_grundplanav_farbig/av_f.txt/dashboard/index.html)           | somap_grundplanav_farbig > av_f.txt |         42.1 |              35.6 |            22 |            0 |          0 |      1915.05  |          1607   |          366 |         3511 |        3141   |       3461.8  |          3511 |     4.26026  |               555.54   |          1.81545   |     3284.2 |     2858.2 |     2593.4 |      98.9 |      72.8 |      28.8 |
| [qgis314-stock > somap314_grundplanav_farbig > av_f.txt](../results/details/compare-major/20201027-125415/qgis314-stock/somap314_grundplanav_farbig/av_f.txt/dashboard/index.html)           | somap_grundplanav_farbig > av_f.txt |         50.7 |              63.3 |            22 |            0 |          0 |      2306     |          2179.5 |          582 |         3612 |        3484.2 |       3600.3  |          3612 |     3.50765  |               457.347  |          1.49474   |     3877.4 |     3055.5 |     2488   |      97.7 |      68.3 |      28.8 |
| [qgis310-stock > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-major/20201027-125415/qgis310-stock/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)           | somap_grundplanav_farbig > av_f.txt |         53.1 |              71.1 |            22 |            0 |          0 |      2415.18  |          1996.5 |          213 |         4347 |        3870.9 |       4277.25 |          4347 |     3.40505  |               443.992  |          1.45101   |     3719.1 |     3117.9 |     2587.6 |      94.1 |      71.6 |      27.6 |
| [qgis314-standalone > somap314_grundplanav_farbig > av_f.txt](../results/details/compare-major/20201027-125415/qgis314-standalone/somap314_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |        397.8 |            1180.8 |            22 |            0 |          0 |     18082.4   |          3186.5 |          290 |        89483 |       88161.8 |      89317.4  |         89483 |     0.235685 |                28.6341 |          0.103656  |     5341.6 |     4506.2 |     2546.3 |      97.5 |      28.9 |      12.6 |
| [qgis316-standalone > somap314_grundplanav_farbig > av_f.txt](../results/details/compare-major/20201027-125415/qgis316-standalone/somap314_grundplanav_farbig/av_f.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f.txt |        438.3 |            1311.3 |            22 |            0 |          0 |     19924.9   |          2691   |          381 |       100203 |      100042   |     100180    |        100203 |     0.211398 |                25.688  |          0.0929747 |     4858.1 |     4228.7 |     2648.9 |      99   |      29.8 |      26.2 |
| [qgis218-stock > somap218_grundplanav_sw > av_sw.txt](../results/details/compare-major/20201027-125415/qgis218-stock/somap218_grundplanav_sw/av_sw.txt/dashboard/index.html)                 | somap_grundplanav_sw > av_sw.txt    |         31.4 |               0   |            20 |            0 |          0 |      1571.2   |          1412   |          278 |         3061 |        2683.7 |       3042.55 |          3061 |     5.01128  |              1796.59   |          2.09847   |     3213.5 |     3088.7 |     2980.3 |      98.2 |      71.6 |      27.8 |
| [qgis316-stock > somap316_grundplanav_sw > av_sw.txt](../results/details/compare-major/20201027-125415/qgis316-stock/somap316_grundplanav_sw/av_sw.txt/dashboard/index.html)                 | somap_grundplanav_sw > av_sw.txt    |         35.6 |              13.4 |            20 |            0 |          0 |      1781.85  |          2019.5 |           23 |         3643 |        3435.8 |       3635.95 |          3643 |     3.92696  |              1221.42   |          1.64441   |     3153.8 |     2868.6 |     2722.4 |      95.4 |      73.3 |      30.2 |
| [qgis314-stock > somap314_grundplanav_sw > av_sw.txt](../results/details/compare-major/20201027-125415/qgis314-stock/somap314_grundplanav_sw/av_sw.txt/dashboard/index.html)                 | somap_grundplanav_sw > av_sw.txt    |         39.5 |              25.9 |            20 |            0 |          0 |      1977.45  |          2285   |          258 |         3843 |        3623.4 |       3836.4  |          3843 |     3.58038  |              1114.01   |          1.49928   |     3101.8 |     2884.6 |     2669.1 |      95.5 |      65.4 |      24.2 |
| [qgis310-stock > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-major/20201027-125415/qgis310-stock/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                 | somap_grundplanav_sw > av_sw.txt    |         41.1 |              30.7 |            20 |            0 |          0 |      2053.25  |          2221.5 |          377 |         3951 |        3778.7 |       3946.95 |          3951 |     3.9116   |              1217.08   |          1.63798   |     3197.2 |     2832   |     2688.6 |      99.1 |      72.7 |      27.9 |
| [qgis316-standalone > somap314_grundplanav_sw > av_sw.txt](../results/details/compare-major/20201027-125415/qgis316-standalone/somap314_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |        327.1 |             940.9 |            20 |            0 |          0 |     16354.5   |          2183.5 |           17 |       101552 |       98091.2 |     101380    |        101552 |     0.191843 |                49.8133 |          0.082957  |     6366.8 |     6017.3 |     4233.8 |      94.1 |      39.7 |      14.1 |
| [qgis314-standalone > somap314_grundplanav_sw > av_sw.txt](../results/details/compare-major/20201027-125415/qgis314-standalone/somap314_grundplanav_sw/av_sw.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw.txt    |        729.2 |            2220.4 |            20 |            0 |          0 |     36458.9   |          2919   |          239 |        93522 |       90943   |      93394.3  |         93522 |     0.213104 |                55.3606 |          0.0921507 |     7935.3 |     7584.5 |     5369   |      98.6 |      38.9 |      12.7 |
| [qgis316-stock > somap316_lk > lk.txt](../results/details/compare-major/20201027-125415/qgis316-stock/somap316_lk/lk.txt/dashboard/index.html)                                               | somap_lk > lk.txt                   |          7   |               0   |            30 |            0 |          0 |       232.133 |           144   |           74 |          755 |         688.6 |        741.8  |           755 |    27.9851   |               758.532  |         11.4163    |     2587.4 |     2492.5 |     2397.5 |      61.9 |      37.9 |      13.9 |
| [qgis316-standalone > somap314_lk > lk.txt](../results/details/compare-major/20201027-125415/qgis316-standalone/somap314_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |          8.2 |              17.8 |            30 |            0 |          0 |       273.367 |           217   |           27 |          724 |         707.6 |        724    |           724 |    24.0192   |               648.611  |         10.1269    |     2631.2 |     2631.2 |     2631.2 |      24.2 |      24.2 |      24.2 |
| [qgis314-stock > somap314_lk > lk.txt](../results/details/compare-major/20201027-125415/qgis314-stock/somap314_lk/lk.txt/dashboard/index.html)                                               | somap_lk > lk.txt                   |          9.4 |              35.3 |            30 |            0 |          0 |       314.1   |           239   |          115 |          802 |         763.3 |        788.8  |           802 |    21.7707   |               589.985  |          8.88119   |     2524.9 |     2445.9 |     2366.8 |      58.7 |      36.2 |      13.7 |
| [qgis310-stock > somap310_lk > lk.txt](../results/details/compare-major/20201027-125415/qgis310-stock/somap310_lk/lk.txt/dashboard/index.html)                                               | somap_lk > lk.txt                   |         10.2 |              45.8 |            30 |            0 |          0 |       338.467 |           222.5 |           96 |          942 |         913.6 |        928.8  |           942 |    21.1566   |               573.487  |          8.63066   |     2462   |     2462   |     2462   |      14.9 |      14.9 |      14.9 |
| [qgis314-standalone > somap314_lk > lk.txt](../results/details/compare-major/20201027-125415/qgis314-standalone/somap314_lk/lk.txt/dashboard/index.html)                                     | somap_lk > lk.txt                   |         10.7 |              53.6 |            30 |            0 |          0 |       356.533 |           186.5 |           68 |         1077 |         914.4 |       1006.05 |          1077 |    20.1748   |               544.798  |          8.50601   |     2626.7 |     2521.4 |     2416.1 |      60.3 |      38.3 |      16.2 |
| [qgis218-stock > somap218_lk > lk.txt](../results/details/compare-major/20201027-125415/qgis218-stock/somap218_lk/lk.txt/dashboard/index.html)                                               | somap_lk > lk.txt                   |         15.5 |             122.2 |            30 |            0 |          0 |       515.767 |           154   |          119 |         2090 |        1176.8 |       2076.8  |          2090 |    11.5607   |               313.761  |          4.7161    |     2490.4 |     2373.3 |     2217.5 |      67.8 |      44.9 |       0.7 |

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
        - lk.txt
      somap218_grundplanav_farbig:
        - av_f.txt
      somap218_grundplanav_sw:
        - av_sw.txt

  qgis310-stock:
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

  qgis314-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_lk:
        - lk.txt
      somap314_grundplanav_farbig:
        - av_f.txt
      somap314_grundplanav_sw:
        - av_sw.txt

  qgis316-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.16'
    projects:
      somap316_lk:
        - lk.txt
      somap316_grundplanav_farbig:
        - av_f.txt
      somap316_grundplanav_sw:
        - av_sw.txt

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
      - av_f.txt
      somap218_grundplanav_sw:
      - av_sw.txt
      somap218_lk:
      - lk.txt
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
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
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
      - av_f.txt
      somap314_grundplanav_sw:
      - av_sw.txt
      somap314_lk:
      - lk.txt
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
      - av_f.txt
      somap314_grundplanav_sw:
      - av_sw.txt
      somap314_lk:
      - lk.txt
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
      - av_f.txt
      somap314_grundplanav_sw:
      - av_sw.txt
      somap314_lk:
      - lk.txt
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
      - av_f.txt
      somap316_grundplanav_sw:
      - av_sw.txt
      somap316_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```