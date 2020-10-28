# QGIS Benchmark summary compare-filesize (20201028-023959)


compare the effect of different QGIS project file size in QGIS 3.10

_run completed in 03h 28m 34s_
## Summary plot
An interactive summary plot can be found [here](report_compare-filesize_20201028-023959_plot.html)

## Summary
| name                                   | group   |   duration s |   medianResTime |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------------------------------|---------|--------------|-----------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-smallfile                      | Global  |       3409   |          9857.5 |               0   |           785 |            0 |     3447.2 |    2621.27 |     2370.9 |      35.4 |   19.9667 |       7.2 |          0 |
| qgis310-bigfile-maxlayer2000           | Global  |      19756.8 |         62779.5 |             479.6 |           785 |            0 |     6609.7 |    3909.6  |     2929.1 |      43.6 |   14.1667 |      12.3 |          0 |
| qgis310-bigfile-hugecache              | Global  |      19757   |         63142   |             479.6 |           785 |            0 |     6728.6 |    3921.33 |     2929.3 |      41.8 |   14.2333 |      12.4 |          0 |
| qgis310-bigfile-bigcache-maxlayer2000  | Global  |      19769.4 |         62650   |             479.9 |           785 |            0 |     6710.6 |    3949.83 |     2920.4 |      42.8 |   14.2667 |      12.4 |          0 |
| qgis310-bigfile                        | Global  |      19872.5 |         62908.5 |             482.9 |           785 |            0 |     6606.2 |    3890.6  |     2878.2 |      43.5 |   14.2333 |      12.3 |          0 |
| qgis310-bigfile-bigcache               | Global  |      19875.6 |         63353   |             483   |           785 |            0 |     6638.9 |    3902.33 |     2902.8 |      39.4 |   14.1667 |      12.4 |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 | Global  |      19895.7 |         63332.5 |             483.6 |           785 |            0 |     6735.3 |    3943.43 |     2934.2 |      41.5 |   14.2333 |      12.4 |          0 |

## Aggregated
| name                                                  | group                    |   duration s |   medianResTime |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------------------------|--------------------------|--------------|-----------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-bigfile-maxlayer2000 > somap310_fix           | somap_fix                |      19756.8 |         62779.5 |               0   |           785 |            0 |     6609.7 |    3909.6  |     2929.1 |      43.6 |   14.1667 |      12.3 |          0 |
| qgis310-bigfile-hugecache > somap310_fix              | somap_fix                |      19757   |         63142   |               0   |           785 |            0 |     6728.6 |    3921.33 |     2929.3 |      41.8 |   14.2333 |      12.4 |          0 |
| qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix  | somap_fix                |      19769.4 |         62650   |               0.1 |           785 |            0 |     6710.6 |    3949.83 |     2920.4 |      42.8 |   14.2667 |      12.4 |          0 |
| qgis310-bigfile > somap310_fix                        | somap_fix                |      19872.5 |         62908.5 |               0.6 |           785 |            0 |     6606.2 |    3890.6  |     2878.2 |      43.5 |   14.2333 |      12.3 |          0 |
| qgis310-bigfile-bigcache > somap310_fix               | somap_fix                |      19875.6 |         63353   |               0.6 |           785 |            0 |     6638.9 |    3902.33 |     2902.8 |      39.4 |   14.1667 |      12.4 |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix | somap_fix                |      19895.7 |         63332.5 |               0.7 |           785 |            0 |     6735.3 |    3943.43 |     2934.2 |      41.5 |   14.2333 |      12.4 |          0 |
| qgis310-smallfile > somap310_grundplanav_farbig       | somap_grundplanav_farbig |       3300.7 |          4635   |               0   |           735 |            0 |     3447.2 |    2866.8  |     2410.4 |      32.3 |   20.1    |      12.6 |          0 |
| qgis310-smallfile > somap310_grundplanav_sw           | somap_grundplanav_sw     |         91.3 |          4566.5 |               0   |            20 |            0 |     2777.3 |    2584.4  |     2528.5 |      31.8 |   18.9    |      15.1 |          0 |
| qgis310-smallfile > somap310_lk                       | somap_lk                 |         17   |           656   |               0   |            30 |            0 |     2436.1 |    2412.6  |     2370.9 |      35.4 |   20.9    |       7.2 |          0 |

## Detail
| name                                                                                                                                                                                                              | group                                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-bigfile-hugecache > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201028-023959/qgis310-bigfile-hugecache/somap310_fix/av_f_big.txt/dashboard/index.html)                           | somap_fix > av_f_big.txt                |      18957.2 |               0   |           735 |            0 |          0 |     25792.1   |         26855   |         2356 |        44403 |       29383.8 |      31606.6  |      42431.8  |     0.386013 |                71.4979 |           0.164304 |     6728.6 |     4515.7 |     2941.6 |      31.7 |      14.2 |      12.4 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201028-023959/qgis310-bigfile-maxlayer2000/somap310_fix/av_f_big.txt/dashboard/index.html)                     | somap_fix > av_f_big.txt                |      18971   |               0.1 |           735 |            0 |          0 |     25810.9   |         26843   |         3111 |        44456 |       29400.4 |      31563.2  |      42322.2  |     0.385763 |                71.4525 |           0.164198 |     6609.7 |     4478.2 |     2931.4 |      28.1 |      14.2 |      12.3 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201028-023959/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_f_big.txt/dashboard/index.html)   | somap_fix > av_f_big.txt                |      18984.7 |               0.1 |           735 |            0 |          0 |     25829.5   |         26933   |         3060 |        44890 |       29943.8 |      31593.6  |      42626.6  |     0.385444 |                71.3938 |           0.164062 |     6710.6 |     4541.6 |     2934.6 |      32.2 |      14.2 |      12.4 |
| [qgis310-bigfile-bigcache > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201028-023959/qgis310-bigfile-bigcache/somap310_fix/av_f_big.txt/dashboard/index.html)                             | somap_fix > av_f_big.txt                |      19076.2 |               0.6 |           735 |            0 |          0 |     25954     |         26863   |         3250 |        44645 |       29453.8 |      31560.8  |      42609.6  |     0.383618 |                71.0547 |           0.163285 |     6638.9 |     4498   |     2922.2 |      32.4 |      14.1 |      12.4 |
| [qgis310-bigfile > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201028-023959/qgis310-bigfile/somap310_fix/av_f_big.txt/dashboard/index.html)                                               | somap_fix > av_f_big.txt                |      19077.4 |               0.6 |           735 |            0 |          0 |     25955.7   |         26986   |         3059 |        44870 |       29486.6 |      31677    |      43277.8  |     0.383558 |                71.0442 |           0.163259 |     6606.2 |     4490.1 |     2915.5 |      39.1 |      14.1 |      12.3 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201028-023959/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_f_big.txt/dashboard/index.html) | somap_fix > av_f_big.txt                |      19102.5 |               0.8 |           735 |            0 |          0 |     25989.7   |         27028   |         3133 |        44311 |       29698.6 |      31847.6  |      42558.7  |     0.38305  |                70.9498 |           0.163043 |     6735.3 |     4536.5 |     2934.2 |      41.5 |      14.2 |      12.4 |
| [qgis310-bigfile > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201028-023959/qgis310-bigfile/somap310_fix/av_sw.txt/dashboard/index.html)                                                     | somap_fix > av_sw.txt                   |        369.1 |               0   |            20 |            0 |          0 |     18457.3   |         19415   |         2556 |        26219 |       26147.6 |      26216    |      26219    |     0.41425  |               201.741  |           0.169017 |     5927.1 |     4279   |     4078.4 |      43.5 |      14.7 |      12.6 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201028-023959/qgis310-bigfile-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)                           | somap_fix > av_sw.txt                   |        369.5 |               0.1 |            20 |            0 |          0 |     18475.2   |         19611   |         4418 |        26294 |       26156.3 |      26287.5  |      26294    |     0.41431  |               201.769  |           0.169042 |     5888.6 |     4314.2 |     4074.5 |      43.6 |      14.7 |      12.5 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201028-023959/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)         | somap_fix > av_sw.txt                   |        371   |               0.5 |            20 |            0 |          0 |     18550.5   |         19519   |         4603 |        26438 |       26402.3 |      26436.2  |      26438    |     0.41204  |               200.664  |           0.168115 |     6235   |     4364.8 |     4141.1 |      42.8 |      14.8 |      12.5 |
| [qgis310-bigfile-bigcache > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201028-023959/qgis310-bigfile-bigcache/somap310_fix/av_sw.txt/dashboard/index.html)                                   | somap_fix > av_sw.txt                   |        374.6 |               1.5 |            20 |            0 |          0 |     18730.5   |         19891   |         2630 |        26395 |       26320.6 |      26391.9  |      26395    |     0.409408 |               199.382  |           0.167042 |     6175.1 |     4295.2 |     4106.8 |      35.5 |      14.7 |      12.5 |
| [qgis310-bigfile-hugecache > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201028-023959/qgis310-bigfile-hugecache/somap310_fix/av_sw.txt/dashboard/index.html)                                 | somap_fix > av_sw.txt                   |        374.6 |               1.5 |            20 |            0 |          0 |     18729     |         19925.5 |         4555 |        26496 |       26323.7 |      26487.5  |      26496    |     0.409015 |               199.191  |           0.166881 |     5922.7 |     4308.1 |     4113.8 |      34.6 |      14.8 |      12.4 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201028-023959/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)       | somap_fix > av_sw.txt                   |        377.5 |               2.3 |            20 |            0 |          0 |     18876     |         20053   |         2809 |        26438 |       26371.1 |      26434.9  |      26438    |     0.406331 |               197.884  |           0.165786 |     6249.9 |     4328.7 |     4091.9 |      38.7 |      14.5 |      12.6 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201028-023959/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)               | somap_fix > lk.txt                      |        413.7 |               0   |            30 |            0 |          0 |     13789.4   |         16198   |         2028 |        16332 |       16303.7 |      16317.7  |      16332    |     0.611571 |                16.5778 |           0.250083 |     2954.7 |     2943.1 |     2920.4 |      24.9 |      13.8 |      12.6 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201028-023959/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)             | somap_fix > lk.txt                      |        415.7 |               0.5 |            30 |            0 |          0 |     13857.4   |         16251.5 |         1965 |        16520 |       16498.2 |      16511.8  |      16520    |     0.608211 |                16.4867 |           0.248709 |     2997.2 |     2965.1 |     2946.4 |      30.2 |      14   |      12.4 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201028-023959/qgis310-bigfile-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)                                 | somap_fix > lk.txt                      |        416.3 |               0.6 |            30 |            0 |          0 |     13878     |         16325.5 |         1905 |        16570 |       16542.2 |      16559.5  |      16570    |     0.607103 |                16.4566 |           0.248256 |     2956.4 |     2936.4 |     2929.1 |      30   |      13.6 |      12.5 |
| [qgis310-bigfile-bigcache > somap310_fix > lk.txt](../results/details/compare-filesize/20201028-023959/qgis310-bigfile-bigcache/somap310_fix/lk.txt/dashboard/index.html)                                         | somap_fix > lk.txt                      |        424.9 |               2.7 |            30 |            0 |          0 |     14162.1   |         16599   |         1963 |        16936 |       16908.1 |      16929.4  |      16936    |     0.596849 |                16.1787 |           0.244063 |     2935.8 |     2913.8 |     2902.8 |      39.4 |      13.7 |      12.5 |
| [qgis310-bigfile-hugecache > somap310_fix > lk.txt](../results/details/compare-filesize/20201028-023959/qgis310-bigfile-hugecache/somap310_fix/lk.txt/dashboard/index.html)                                       | somap_fix > lk.txt                      |        425.3 |               2.8 |            30 |            0 |          0 |     14175.5   |         16361.5 |         1954 |        17174 |       17143.6 |      17174    |      17174    |     0.594731 |                16.1213 |           0.243197 |     2962.5 |     2940.2 |     2929.3 |      41.8 |      13.7 |      12.5 |
| [qgis310-bigfile > somap310_fix > lk.txt](../results/details/compare-filesize/20201028-023959/qgis310-bigfile/somap310_fix/lk.txt/dashboard/index.html)                                                           | somap_fix > lk.txt                      |        425.9 |               3   |            30 |            0 |          0 |     14197.9   |         16507.5 |         2000 |        16891 |       16778.1 |      16886.6  |      16891    |     0.595096 |                16.1312 |           0.243346 |     2926.3 |     2902.7 |     2878.2 |      31.1 |      13.9 |      12.5 |
| [qgis310-smallfile > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-filesize/20201028-023959/qgis310-smallfile/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)             | somap_grundplanav_farbig > av_f_big.txt |       3300.7 |               0   |           735 |            0 |          0 |      4490.71  |          4635   |         1996 |         7560 |        5674.8 |       6522    |       7217.16 |     2.2129   |               323.859  |           0.974325 |     3447.2 |     2866.8 |     2410.4 |      32.3 |      20.1 |      12.6 |
| [qgis310-smallfile > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-filesize/20201028-023959/qgis310-smallfile/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                           | somap_grundplanav_sw > av_sw.txt        |         91.3 |               0   |            20 |            0 |          0 |      4563     |          4566.5 |         2354 |         5965 |        5901.1 |       5961.95 |       5965    |     1.65714  |               515.616  |           0.693927 |     2777.3 |     2584.4 |     2528.5 |      31.8 |      18.9 |      15.1 |
| [qgis310-smallfile > somap310_lk > lk.txt](../results/details/compare-filesize/20201028-023959/qgis310-smallfile/somap310_lk/lk.txt/dashboard/index.html)                                                         | somap_lk > lk.txt                       |         17   |               0   |            30 |            0 |          0 |       567.867 |           656   |          218 |          755 |         729.4 |        750.6  |        755    |    12.8041   |               347.079  |           5.22334  |     2436.1 |     2412.6 |     2370.9 |      35.4 |      20.9 |       7.2 |

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
description: 'compare the effect of different QGIS project file size in QGIS 3.10'

test-cases:

  qgis310-bigfile:
    active: yes
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_MAX_CACHE_LAYERS: '100'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap310_fix:
        - lk.txt
        - av_f_big.txt
        - av_sw.txt

  qgis310-bigfile-bigcache:
    inherit: qgis310-bigfile
    compose-variables:
      QGIS_SERVER_CACHE_SIZE: '200'

  qgis310-bigfile-hugecache:
    inherit: qgis310-bigfile
    compose-variables:
      QGIS_SERVER_CACHE_SIZE: '1000'

  qgis310-bigfile-maxlayer2000:
    inherit: qgis310-bigfile
    compose-variables:
      QGIS_MAX_CACHE_LAYERS: '2000'

  qgis310-bigfile-bigcache-maxlayer2000:
    inherit: qgis310-bigfile
    compose-variables:
      QGIS_SERVER_CACHE_SIZE: '200'
      QGIS_MAX_CACHE_LAYERS: '2000'

  qgis310-bigfile-hugecache-maxlayer2000:
    inherit: qgis310-bigfile
    compose-variables:
      QGIS_SERVER_CACHE_SIZE: '1000'
      QGIS_MAX_CACHE_LAYERS: '2000'

  qgis310-smallfile:
    inherit: qgis310-bigfile
    projects:
      somap310_lk:
        - lk.txt
      somap310_grundplanav_farbig:
        - av_f_big.txt
      somap310_grundplanav_sw:
        - av_sw.txt

```
### parsed test configurations

```
description: compare the effect of different QGIS project file size in QGIS 3.10
test-cases:
  qgis310-bigfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f_big.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-bigcache:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '200'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f_big.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-bigcache-maxlayer2000:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '2000'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '200'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f_big.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-hugecache:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '1000'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f_big.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-hugecache-maxlayer2000:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '2000'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '1000'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f_big.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-maxlayer2000:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '2000'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f_big.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-smallfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '8'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```