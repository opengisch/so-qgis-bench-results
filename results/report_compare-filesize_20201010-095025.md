# QGIS Benchmark summary compare-filesize (20201010-095025)


compare the effect of different QGIS project file size in QGIS 3.10

_run completed in 1094.2700000000002s_

## Summary
| name                                   |   duration s |   penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|----------------------------------------|--------------|-------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis310-smallfile                      |       216.48 |        0    |            72 |            0 |     2374.3 |    2113.6  |      32.4 |   18.1333 |          0 |
| qgis310-bigfile-hugecache              |      1291.42 |      496.55 |            72 |            0 |     4585.3 |    2776.3  |      32   |   14.2333 |          0 |
| qgis310-bigfile-maxlayer2000           |      1291.44 |      496.56 |            72 |            0 |     4602.1 |    2754.77 |      38   |   14.3333 |          0 |
| qgis310-bigfile                        |      1291.63 |      496.65 |            72 |            0 |     4748.2 |    2758    |      40.1 |   14.4333 |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 |      1291.87 |      496.76 |            72 |            0 |     4625.3 |    2784.83 |      38.5 |   14.3333 |          0 |
| qgis310-bigfile-bigcache-maxlayer2000  |      1297.66 |      499.44 |            72 |            0 |     4851.2 |    2777.4  |      41.9 |   14.3667 |          0 |
| qgis310-bigfile-bigcache               |      1303.33 |      502.06 |            72 |            0 |     4700.4 |    2764.47 |      36.3 |   14.4333 |          0 |

## Aggregated
| name                                                  |   duration s |   penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|-------------------------------------------------------|--------------|-------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis310-smallfile > somap310_lk                       |        16.83 |        0    |            30 |            0 |     2060.8 |    2059.2  |      19.9 |   14      |          0 |
| qgis310-smallfile > somap310_grundplanav_sw           |        90.88 |      439.99 |            20 |            0 |     2339.3 |    2139.1  |      32.4 |   18.5    |          0 |
| qgis310-smallfile > somap310_grundplanav_farbig       |       108.77 |      546.29 |            22 |            0 |     2374.3 |    2142.5  |      29.6 |   21.9    |          0 |
| qgis310-bigfile-hugecache > somap310_fix              |      1291.42 |     7573.32 |            72 |            0 |     4585.3 |    2776.3  |      32   |   14.2333 |          0 |
| qgis310-bigfile-maxlayer2000 > somap310_fix           |      1291.44 |     7573.44 |            72 |            0 |     4602.1 |    2754.77 |      38   |   14.3333 |          0 |
| qgis310-bigfile > somap310_fix                        |      1291.63 |     7574.57 |            72 |            0 |     4748.2 |    2758    |      40.1 |   14.4333 |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix |      1291.87 |     7576    |            72 |            0 |     4625.3 |    2784.83 |      38.5 |   14.3333 |          0 |
| qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix  |      1297.66 |     7610.4  |            72 |            0 |     4851.2 |    2777.4  |      41.9 |   14.3667 |          0 |
| qgis310-bigfile-bigcache > somap310_fix               |      1303.33 |     7644.09 |            72 |            0 |     4700.4 |    2764.47 |      36.3 |   14.4333 |          0 |

## Detail
| name                                                                                                                                                                                                        |   duration s |   penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-smallfile > somap310_lk > lk.txt](../results/details/compare-filesize/20201010-095025/qgis310-smallfile/somap310_lk/lk.txt/dashboard/index.html)                                                   |        16.83 |        0    |            30 |            0 |          0 |       560.933 |           637.5 |          254 |          762 |         726.5 |        747.15 |           762 |    12.7551   |               345.738  |           5.20335  |     2060.8 |     2059.2 |     2057.6 |      19.9 |      14   |       8.2 |
| [qgis310-smallfile > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-filesize/20201010-095025/qgis310-smallfile/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                     |        90.88 |      439.99 |            20 |            0 |          0 |      4543.9   |          4498.5 |         2273 |         6057 |        6008.4 |       6054.7  |          6057 |     1.65604  |               515.272  |           0.693467 |     2339.3 |     2139.1 |     2083.8 |      32.4 |      18.5 |      15   |
| [qgis310-smallfile > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-filesize/20201010-095025/qgis310-smallfile/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)               |       108.77 |      546.29 |            22 |            0 |          0 |      4944     |          5093.5 |         2838 |         6448 |        5964.6 |       6392.5  |          6448 |     1.66983  |               217.731  |           0.711575 |     2374.3 |     2142.5 |     1998.2 |      29.6 |      21.9 |      17.2 |
| [qgis310-bigfile-hugecache > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201010-095025/qgis310-bigfile-hugecache/somap310_fix/av_sw.txt/dashboard/index.html)                           |       375.5  |     2131.13 |            20 |            0 |          0 |     18775.2   |         19794   |         4332 |        26862 |       26825.2 |      26861.2  |         26862 |     0.406331 |               197.883  |           0.165786 |     4585.3 |     2891.5 |     2621.1 |      29.4 |      14.3 |      12.4 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201010-095025/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)   |       378.28 |     2147.65 |            20 |            0 |          0 |     18914.2   |         20083.5 |         2513 |        27265 |       27159.4 |      27260    |         27265 |     0.403226 |               196.371  |           0.164519 |     4851.2 |     2922.4 |     2530.6 |      40   |      14.6 |      12.5 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201010-095025/qgis310-bigfile-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)                     |       379.76 |     2156.45 |            20 |            0 |          0 |     18987.8   |         20983.5 |         2437 |        27234 |       26909.4 |      27217.8  |         27234 |     0.403437 |               196.474  |           0.164606 |     4602.1 |     2874.2 |     2626   |      25.9 |      14.3 |      12.6 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201010-095025/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html) |       380.77 |     2162.45 |            20 |            0 |          0 |     19038.3   |         20225   |         2519 |        27391 |       27241.3 |      27383.8  |         27391 |     0.401929 |               195.74   |           0.16399  |     4625.3 |     2887.7 |     2637.5 |      31.1 |      14.5 |      12.4 |
| [qgis310-bigfile-bigcache > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201010-095025/qgis310-bigfile-bigcache/somap310_fix/av_sw.txt/dashboard/index.html)                             |       381.38 |     2166.07 |            20 |            0 |          0 |     19069.1   |         20186   |         2601 |        26966 |       26770.4 |      26956.8  |         26966 |     0.402479 |               196.008  |           0.164215 |     4700.4 |     2892.4 |     2590.1 |      28.6 |      14.6 |      12.5 |
| [qgis310-bigfile > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201010-095025/qgis310-bigfile/somap310_fix/av_sw.txt/dashboard/index.html)                                               |       381.75 |     2168.27 |            20 |            0 |          0 |     19087.3   |         20265.5 |         4427 |        27102 |       27020.4 |      27098.6  |         27102 |     0.40197  |               195.76   |           0.164007 |     4748.2 |     2884.5 |     2596.5 |      24.3 |      14.5 |      12.5 |
| [qgis310-bigfile > somap310_fix > lk.txt](../results/details/compare-filesize/20201010-095025/qgis310-bigfile/somap310_fix/lk.txt/dashboard/index.html)                                                     |       413.67 |     2357.93 |            30 |            0 |          0 |     13789     |         16172   |         1929 |        16400 |       16358   |      16390.7  |         16400 |     0.61267  |                16.6069 |           0.250533 |     2600.2 |     2577.3 |     2452.4 |      40.1 |      14   |      12.5 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201010-095025/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)       |       414.11 |     2360.55 |            30 |            0 |          0 |     13803.7   |         16223.5 |         1927 |        16528 |       16469.7 |      16524.7  |         16528 |     0.60931  |                16.5159 |           0.249159 |     2619.4 |     2595.3 |     2567.9 |      30   |      13.8 |      12.5 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201010-095025/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)         |       414.33 |     2361.85 |            30 |            0 |          0 |     13810.9   |         16051.5 |         1955 |        16821 |       16524.9 |      16747.8  |         16821 |     0.606772 |                16.4471 |           0.248121 |     2619.8 |     2593.4 |     2580.7 |      38.5 |      13.6 |      12.5 |
| [qgis310-bigfile-bigcache > somap310_fix > lk.txt](../results/details/compare-filesize/20201010-095025/qgis310-bigfile-bigcache/somap310_fix/lk.txt/dashboard/index.html)                                   |       418.16 |     2384.61 |            30 |            0 |          0 |     13938.5   |         16363   |         1901 |        16732 |       16612.6 |      16677.5  |         16732 |     0.603877 |                16.3686 |           0.246937 |     2608.7 |     2584.7 |     2564.6 |      32.9 |      13.9 |      12.5 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201010-095025/qgis310-bigfile-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)                           |       419.73 |     2393.94 |            30 |            0 |          0 |     13991.1   |         16213   |         1925 |        16733 |       16357.6 |      16536.1  |         16733 |     0.60479  |                16.3934 |           0.24731  |     2611.5 |     2585.9 |     2498.3 |      38   |      13.9 |      12.4 |
| [qgis310-bigfile-hugecache > somap310_fix > lk.txt](../results/details/compare-filesize/20201010-095025/qgis310-bigfile-hugecache/somap310_fix/lk.txt/dashboard/index.html)                                 |       422.71 |     2411.65 |            30 |            0 |          0 |     14090.3   |         16474   |         1953 |        16902 |       16720   |      16842    |         16902 |     0.598862 |                16.2327 |           0.244886 |     2620.3 |     2588.4 |     2581   |      32   |      13.6 |      12.6 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_f.txt](../results/details/compare-filesize/20201010-095025/qgis310-bigfile-maxlayer2000/somap310_fix/av_f.txt/dashboard/index.html)                       |       491.95 |     2823.05 |            22 |            0 |          0 |     22361.4   |         25664   |         3301 |        29886 |       29412.4 |      29829.9  |         29886 |     0.367083 |                48.1228 |           0.15105  |     3557.7 |     2804.2 |     2585.3 |      30.7 |      14.8 |      12.5 |
| [qgis310-bigfile-hugecache > somap310_fix > av_f.txt](../results/details/compare-filesize/20201010-095025/qgis310-bigfile-hugecache/somap310_fix/av_f.txt/dashboard/index.html)                             |       493.21 |     2830.54 |            22 |            0 |          0 |     22418.5   |         25659   |         3184 |        29749 |       29730.5 |      29748.2  |         29749 |     0.366801 |                48.0859 |           0.150934 |     3571.1 |     2849   |     2587.9 |      29.8 |      14.8 |      12.5 |
| [qgis310-bigfile > somap310_fix > av_f.txt](../results/details/compare-filesize/20201010-095025/qgis310-bigfile/somap310_fix/av_f.txt/dashboard/index.html)                                                 |       496.21 |     2848.37 |            22 |            0 |          0 |     22555     |         25846   |         3294 |        30053 |       29698.5 |      30009.5  |         30053 |     0.363666 |                47.6749 |           0.149644 |     3577.8 |     2812.2 |     2571   |      39.5 |      14.8 |      12.4 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_f.txt](../results/details/compare-filesize/20201010-095025/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_f.txt/dashboard/index.html)   |       496.99 |     2853    |            22 |            0 |          0 |     22590.4   |         25918.5 |         3327 |        30152 |       29868.6 |      30119.8  |         30152 |     0.364903 |                47.837  |           0.150153 |     3601.6 |     2871.5 |     2589.8 |      38.5 |      14.7 |      12.6 |
| [qgis310-bigfile-bigcache > somap310_fix > av_f.txt](../results/details/compare-filesize/20201010-095025/qgis310-bigfile-bigcache/somap310_fix/av_f.txt/dashboard/index.html)                               |       503.79 |     2893.4  |            22 |            0 |          0 |     22899.4   |         26177.5 |         3444 |        30320 |       30047.7 |      30291.8  |         30320 |     0.360443 |                47.2524 |           0.148318 |     3571   |     2816.3 |     2567.5 |      36.3 |      14.8 |      12.5 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_f.txt](../results/details/compare-filesize/20201010-095025/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_f.txt/dashboard/index.html)     |       505.05 |     2900.89 |            22 |            0 |          0 |     22957     |         25896.5 |         3062 |        30986 |       30836.7 |      30964.1  |         30986 |     0.360425 |                47.25   |           0.148311 |     3570.9 |     2816.4 |     2547   |      41.9 |      14.9 |      12.5 |

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
      QGIS_SERVER_MAX_THREADS: '4'
      QGIS_MAX_CACHE_LAYERS: '100'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap310_fix:
        - lk.txt
        - av_f.txt
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
        - av_f.txt
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
      QGIS_SERVER_MAX_THREADS: '4'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-bigcache:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '200'
      QGIS_SERVER_MAX_THREADS: '4'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-bigcache-maxlayer2000:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '2000'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '200'
      QGIS_SERVER_MAX_THREADS: '4'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-hugecache:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '1000'
      QGIS_SERVER_MAX_THREADS: '4'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-hugecache-maxlayer2000:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '2000'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '1000'
      QGIS_SERVER_MAX_THREADS: '4'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-bigfile-maxlayer2000:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '2000'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '4'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis310-smallfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '4'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: qgis310-bigfile
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f.txt
      somap310_grundplanav_sw:
      - av_sw.txt
      somap310_lk:
      - lk.txt
    template: docker-compose-qgis-3-nginx

```