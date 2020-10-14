# QGIS Benchmark summary compare-filesize (20201014-043700)


compare the effect of different QGIS project file size in QGIS 3.10

_run completed in 03h 30m 13s_
## Summary plot
An interactive summary plot can be found [here](report_compare-filesize_20201014-043700_plot.html)

## Summary
| name                                   | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------------------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-smallfile                      | Global  |       3451.8 |               0   |           785 |            0 |     3591.5 |    2781.13 |     2594.9 |      41.1 |   17.9    |       8   |          0 |
| qgis310-bigfile-bigcache               | Global  |      19691   |             470.5 |           785 |            0 |     6833.2 |    4007.43 |     3006.4 |      42.6 |   14.1667 |      12.4 |          0 |
| qgis310-bigfile                        | Global  |      19712.2 |             471.1 |           785 |            0 |     6674.2 |    4012.03 |     3038.6 |      42.5 |   14.1    |      12.3 |          0 |
| qgis310-bigfile-hugecache              | Global  |      19975.5 |             478.7 |           785 |            0 |     7029.9 |    4093.33 |     3079.2 |      40.1 |   14.2    |      12.4 |          0 |
| qgis310-bigfile-maxlayer2000           | Global  |      19994.8 |             479.3 |           785 |            0 |     6900.6 |    4086.23 |     3087.6 |      43.8 |   14.2333 |      12.4 |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 | Global  |      20079.7 |             481.7 |           785 |            0 |     6977.2 |    4143.17 |     3058.3 |      40.8 |   14.3333 |      12.4 |          0 |
| qgis310-bigfile-bigcache-maxlayer2000  | Global  |      20386.4 |             490.6 |           785 |            0 |     6909.6 |    4098.27 |     3095.7 |      33.7 |   14.1    |      12.4 |          0 |

## Aggregated
| name                                                  | group                    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------------------------|--------------------------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-bigfile-bigcache > somap310_fix               | somap_fix                |      19691   |               0   |           785 |            0 |     6833.2 |    4007.43 |     3006.4 |      42.6 |   14.1667 |      12.4 |          0 |
| qgis310-bigfile > somap310_fix                        | somap_fix                |      19712.2 |               0.1 |           785 |            0 |     6674.2 |    4012.03 |     3038.6 |      42.5 |   14.1    |      12.3 |          0 |
| qgis310-bigfile-hugecache > somap310_fix              | somap_fix                |      19975.5 |               1.4 |           785 |            0 |     7029.9 |    4093.33 |     3079.2 |      40.1 |   14.2    |      12.4 |          0 |
| qgis310-bigfile-maxlayer2000 > somap310_fix           | somap_fix                |      19994.8 |               1.5 |           785 |            0 |     6900.6 |    4086.23 |     3087.6 |      43.8 |   14.2333 |      12.4 |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix | somap_fix                |      20079.7 |               2   |           785 |            0 |     6977.2 |    4143.17 |     3058.3 |      40.8 |   14.3333 |      12.4 |          0 |
| qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix  | somap_fix                |      20386.4 |               3.5 |           785 |            0 |     6909.6 |    4098.27 |     3095.7 |      33.7 |   14.1    |      12.4 |          0 |
| qgis310-smallfile > somap310_grundplanav_farbig       | somap_grundplanav_farbig |       3340.9 |               0   |           735 |            0 |     3591.5 |    3028.1  |     2594.9 |      41.1 |   20      |      12.5 |          0 |
| qgis310-smallfile > somap310_grundplanav_sw           | somap_grundplanav_sw     |         92.4 |               0   |            20 |            0 |     2937   |    2712.7  |     2674.8 |      30.6 |   18.5    |      14.7 |          0 |
| qgis310-smallfile > somap310_lk                       | somap_lk                 |         18.5 |               0   |            30 |            0 |     2602.7 |    2602.6  |     2602.5 |      22.4 |   15.2    |       8   |          0 |

## Detail
| name                                                                                                                                                                                                              | group                                   |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-bigfile-bigcache > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201014-043700/qgis310-bigfile-bigcache/somap310_fix/av_f_big.txt/dashboard/index.html)                             | somap_fix > av_f_big.txt                |      18908.9 |               0   |           735 |            0 |          0 |     25726.4   |         26604   |         2427 |        44072 |       29439.4 |      31805.2  |      42219.3  |     0.38697  |                71.6758 |           0.164712 |     6833.2 |     4618.8 |     3056.9 |      35.8 |      14.1 |      12.4 |
| [qgis310-bigfile > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201014-043700/qgis310-bigfile/somap310_fix/av_f_big.txt/dashboard/index.html)                                               | somap_fix > av_f_big.txt                |      18915.8 |               0   |           735 |            0 |          0 |     25735.7   |         26678   |         3082 |        44053 |       29531.4 |      31169.2  |      42355.6  |     0.386879 |                71.6586 |           0.164673 |     6674.2 |     4608.3 |     3058.2 |      40.1 |      14.1 |      12.3 |
| [qgis310-bigfile-hugecache > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201014-043700/qgis310-bigfile-hugecache/somap310_fix/av_f_big.txt/dashboard/index.html)                           | somap_fix > av_f_big.txt                |      19186.8 |               1.5 |           735 |            0 |          0 |     26104.5   |         26992   |         3061 |        44069 |       29995.6 |      32433.8  |      42307.4  |     0.381361 |                70.6366 |           0.162324 |     7029.9 |     4688   |     3090.5 |      34.7 |      14.1 |      12.4 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201014-043700/qgis310-bigfile-maxlayer2000/somap310_fix/av_f_big.txt/dashboard/index.html)                     | somap_fix > av_f_big.txt                |      19198.4 |               1.5 |           735 |            0 |          0 |     26120.3   |         27063   |         3082 |        44187 |       29744.2 |      32108.6  |      42623.1  |     0.381141 |                70.5959 |           0.162231 |     6900.6 |     4681.3 |     3127.4 |      43.8 |      14.1 |      12.4 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201014-043700/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_f_big.txt/dashboard/index.html) | somap_fix > av_f_big.txt                |      19267.8 |               1.9 |           735 |            0 |          0 |     26214.7   |         27087   |         3189 |        44681 |       29962.8 |      32352.6  |      43017.8  |     0.379788 |                70.3466 |           0.161655 |     6977.2 |     4747   |     3113.4 |      36.4 |      14.1 |      12.4 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_f_big.txt](../results/details/compare-filesize/20201014-043700/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_f_big.txt/dashboard/index.html)   | somap_fix > av_f_big.txt                |      19587.4 |               3.6 |           735 |            0 |          0 |     26649.5   |         27560   |         3143 |        45238 |       30443.6 |      32859.2  |      43246.3  |     0.373632 |                69.2051 |           0.159034 |     6909.6 |     4701.9 |     3100.3 |      28.3 |      14.1 |      12.4 |
| [qgis310-bigfile-bigcache > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201014-043700/qgis310-bigfile-bigcache/somap310_fix/av_sw.txt/dashboard/index.html)                                   | somap_fix > av_sw.txt                   |        369.2 |               0   |            20 |            0 |          0 |     18458.3   |         19489.5 |         2466 |        26343 |       26200.6 |      26336.6  |      26343    |     0.413856 |               201.548  |           0.168856 |     5946.3 |     4343.6 |     4166.5 |      42.6 |      14.6 |      12.4 |
| [qgis310-bigfile > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201014-043700/qgis310-bigfile/somap310_fix/av_sw.txt/dashboard/index.html)                                                     | somap_fix > av_sw.txt                   |        373.6 |               1.2 |            20 |            0 |          0 |     18678.9   |         19680   |         4668 |        26563 |       26471.9 |      26558.5  |      26563    |     0.410872 |               200.095  |           0.167639 |     5796.7 |     4377.9 |     4207.5 |      32.6 |      14.4 |      12.4 |
| [qgis310-bigfile-hugecache > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201014-043700/qgis310-bigfile-hugecache/somap310_fix/av_sw.txt/dashboard/index.html)                                 | somap_fix > av_sw.txt                   |        373.8 |               1.3 |            20 |            0 |          0 |     18691.7   |         19765   |         4478 |        26600 |       26570.1 |      26599.2  |      26600    |     0.409249 |               199.304  |           0.166977 |     5994.6 |     4502.8 |     4335.9 |      40.1 |      14.8 |      12.5 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201014-043700/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)         | somap_fix > av_sw.txt                   |        376.6 |               2   |            20 |            0 |          0 |     18830.1   |         20826.5 |         2541 |        26840 |       26807.1 |      26838.8  |      26840    |     0.405219 |               197.343  |           0.165333 |     6033.2 |     4482.3 |     4283.6 |      33.7 |      14.5 |      12.5 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201014-043700/qgis310-bigfile-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)                           | somap_fix > av_sw.txt                   |        378.9 |               2.6 |            20 |            0 |          0 |     18944.9   |         20179   |         4575 |        27006 |       26845   |      26998    |      27006    |     0.405531 |               197.494  |           0.16546  |     6061.8 |     4466.7 |     4268.5 |      33.9 |      14.8 |      12.5 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201014-043700/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)       | somap_fix > av_sw.txt                   |        379.4 |               2.8 |            20 |            0 |          0 |     18967.8   |         21148.5 |         2018 |        26696 |       26609.1 |      26692.3  |      26696    |     0.404424 |               196.955  |           0.165008 |     6430.3 |     4569.3 |     4351.5 |      39   |      14.8 |      12.4 |
| [qgis310-bigfile-bigcache > somap310_fix > lk.txt](../results/details/compare-filesize/20201014-043700/qgis310-bigfile-bigcache/somap310_fix/lk.txt/dashboard/index.html)                                         | somap_fix > lk.txt                      |        412.9 |               0   |            30 |            0 |          0 |     13763.2   |         16218.5 |         1895 |        16472 |       16423.3 |      16452.8  |      16472    |     0.613434 |                16.6277 |           0.250845 |     3075.1 |     3059.9 |     3006.4 |      34.2 |      13.8 |      12.5 |
| [qgis310-bigfile-hugecache > somap310_fix > lk.txt](../results/details/compare-filesize/20201014-043700/qgis310-bigfile-hugecache/somap310_fix/lk.txt/dashboard/index.html)                                       | somap_fix > lk.txt                      |        414.9 |               0.5 |            30 |            0 |          0 |     13829.2   |         16103   |         1868 |        16891 |       16849.7 |      16889.9  |      16891    |     0.609694 |                16.5263 |           0.249316 |     3115.4 |     3089.2 |     3079.2 |      40.1 |      13.7 |      12.5 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201014-043700/qgis310-bigfile-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)                                 | somap_fix > lk.txt                      |        417.5 |               1.1 |            30 |            0 |          0 |     13918.2   |         16206.5 |         1897 |        16752 |       16671.9 |      16740.5  |      16752    |     0.607583 |                16.469  |           0.248452 |     3133.9 |     3110.7 |     3087.6 |      31   |      13.8 |      12.5 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201014-043700/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)               | somap_fix > lk.txt                      |        422.4 |               2.3 |            30 |            0 |          0 |     14079.1   |         16465.5 |         1980 |        16790 |       16761.9 |      16784.5  |      16790    |     0.599652 |                16.2541 |           0.245209 |     3133.4 |     3110.6 |     3095.7 |      32.2 |      13.7 |      12.6 |
| [qgis310-bigfile > somap310_fix > lk.txt](../results/details/compare-filesize/20201014-043700/qgis310-bigfile/somap310_fix/lk.txt/dashboard/index.html)                                                           | somap_fix > lk.txt                      |        422.9 |               2.4 |            30 |            0 |          0 |     14096     |         16440   |         1916 |        17057 |       16987.3 |      17032.8  |      17057    |     0.599844 |                16.2593 |           0.245288 |     3077.8 |     3049.9 |     3038.6 |      42.5 |      13.8 |      12.5 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201014-043700/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)             | somap_fix > lk.txt                      |        432.6 |               4.8 |            30 |            0 |          0 |     14420.3   |         16742.5 |         1968 |        17303 |       17219.5 |      17259    |      17303    |     0.584602 |                15.8461 |           0.239055 |     3139.1 |     3113.2 |     3058.3 |      40.8 |      14.1 |      12.6 |
| [qgis310-smallfile > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-filesize/20201014-043700/qgis310-smallfile/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)             | somap_grundplanav_farbig > av_f_big.txt |       3340.9 |               0   |           735 |            0 |          0 |      4545.43  |          4687   |         1966 |         7924 |        5627.4 |       6571.8  |       7409.48 |     2.18624  |               319.947  |           0.962585 |     3591.5 |     3028.1 |     2594.9 |      41.1 |      20   |      12.5 |
| [qgis310-smallfile > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-filesize/20201014-043700/qgis310-smallfile/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                           | somap_grundplanav_sw > av_sw.txt        |         92.4 |               0   |            20 |            0 |          0 |      4622.05  |          4636.5 |         3192 |         6071 |        5931.7 |       6064.1  |       6071    |     1.63079  |               507.416  |           0.682893 |     2937   |     2712.7 |     2674.8 |      30.6 |      18.5 |      14.7 |
| [qgis310-smallfile > somap310_lk > lk.txt](../results/details/compare-filesize/20201014-043700/qgis310-smallfile/somap310_lk/lk.txt/dashboard/index.html)                                                         | somap_lk > lk.txt                       |         18.5 |               0   |            30 |            0 |          0 |       615.033 |           687   |          280 |          786 |         752.8 |        785.45 |        786    |    11.957    |               324.104  |           4.87775  |     2602.7 |     2602.6 |     2602.5 |      22.4 |      15.2 |       8   |

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