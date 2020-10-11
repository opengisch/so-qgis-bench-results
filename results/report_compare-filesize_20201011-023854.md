# QGIS Benchmark summary compare-filesize (20201011-023854)


compare the effect of different QGIS project file size in QGIS 3.10

_run completed in 1117.87s_

## Summary
| name                                   | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|----------------------------------------|---------|--------------|-------------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis310-smallfile                      | Global  |       226.21 |              0    |            72 |            0 |     2412.6 |    2170.73 |      34.2 |   19.8333 |          0 |
| qgis310-bigfile                        | Global  |      1309.53 |            478.9  |            72 |            0 |     4727.5 |    2795.83 |      43.5 |   14.3333 |          0 |
| qgis310-bigfile-bigcache               | Global  |      1319.21 |            483.18 |            72 |            0 |     4562.5 |    2805.87 |      38.8 |   14.2667 |          0 |
| qgis310-bigfile-hugecache              | Global  |      1322.15 |            484.48 |            72 |            0 |     4800.9 |    2810.27 |      37.8 |   14.3    |          0 |
| qgis310-bigfile-bigcache-maxlayer2000  | Global  |      1323.2  |            484.94 |            72 |            0 |     4381.3 |    2799.37 |      40.5 |   14.3667 |          0 |
| qgis310-bigfile-maxlayer2000           | Global  |      1335.78 |            490.5  |            72 |            0 |     4684.4 |    2803.8  |      41.6 |   14.3667 |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 | Global  |      1337.74 |            491.37 |            72 |            0 |     4647.6 |    2813.17 |      40.6 |   14.5333 |          0 |

## Aggregated
| name                                                  | group                    |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|-------------------------------------------------------|--------------------------|--------------|-------------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis310-bigfile > somap310_fix                        | somap_fix                |      1309.53 |              0    |            72 |            0 |     4727.5 |    2795.83 |      43.5 |   14.3333 |          0 |
| qgis310-bigfile-bigcache > somap310_fix               | somap_fix                |      1319.21 |              0.74 |            72 |            0 |     4562.5 |    2805.87 |      38.8 |   14.2667 |          0 |
| qgis310-bigfile-hugecache > somap310_fix              | somap_fix                |      1322.15 |              0.96 |            72 |            0 |     4800.9 |    2810.27 |      37.8 |   14.3    |          0 |
| qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix  | somap_fix                |      1323.2  |              1.04 |            72 |            0 |     4381.3 |    2799.37 |      40.5 |   14.3667 |          0 |
| qgis310-bigfile-maxlayer2000 > somap310_fix           | somap_fix                |      1335.78 |              2    |            72 |            0 |     4684.4 |    2803.8  |      41.6 |   14.3667 |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix | somap_fix                |      1337.74 |              2.15 |            72 |            0 |     4647.6 |    2813.17 |      40.6 |   14.5333 |          0 |
| qgis310-smallfile > somap310_grundplanav_farbig       | somap_grundplanav_farbig |       114.64 |              0    |            22 |            0 |     2412.6 |    2227.6  |      30.3 |   21.2    |          0 |
| qgis310-smallfile > somap310_grundplanav_sw           | somap_grundplanav_sw     |        93.86 |              0    |            20 |            0 |     2384.7 |    2200.9  |      31.1 |   18.5    |          0 |
| qgis310-smallfile > somap310_lk                       | somap_lk                 |        17.71 |              0    |            30 |            0 |     2110.8 |    2083.7  |      34.2 |   19.8    |          0 |

## Detail
| name                                                                                                                                                                                                        | group                               |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_f.txt](../results/details/compare-filesize/20201011-023854/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_f.txt/dashboard/index.html)     | somap_fix > av_f.txt                |       500.46 |              0    |            22 |            0 |          0 |     22748     |         26019.5 |         3225 |        30525 |       30220.7 |       30491.1 |         30525 |     0.360762 |                47.2942 |           0.148449 |     3591.9 |     2840.9 |     2582.1 |      36.6 |      14.9 |      12.4 |
| [qgis310-bigfile > somap310_fix > av_f.txt](../results/details/compare-filesize/20201011-023854/qgis310-bigfile/somap310_fix/av_f.txt/dashboard/index.html)                                                 | somap_fix > av_f.txt                |       505.19 |              0.95 |            22 |            0 |          0 |     22963.4   |         26310   |         3415 |        30572 |       30360.6 |       30547   |         30572 |     0.358973 |                47.0596 |           0.147713 |     3452.3 |     2844.3 |     2625.3 |      43.5 |      14.8 |      12.4 |
| [qgis310-bigfile-hugecache > somap310_fix > av_f.txt](../results/details/compare-filesize/20201011-023854/qgis310-bigfile-hugecache/somap310_fix/av_f.txt/dashboard/index.html)                             | somap_fix > av_f.txt                |       507.05 |              1.32 |            22 |            0 |          0 |     23047.6   |         26367.5 |         3353 |        30498 |       30375.6 |       30482.2 |         30498 |     0.356137 |                46.6879 |           0.146546 |     3654.5 |     2849.9 |     2630.1 |      34.4 |      14.6 |      12.5 |
| [qgis310-bigfile-bigcache > somap310_fix > av_f.txt](../results/details/compare-filesize/20201011-023854/qgis310-bigfile-bigcache/somap310_fix/av_f.txt/dashboard/index.html)                               | somap_fix > av_f.txt                |       507.42 |              1.39 |            22 |            0 |          0 |     23064.7   |         26424.5 |         3139 |        30834 |       30535.3 |       30792.8 |         30834 |     0.357265 |                46.8357 |           0.14701  |     3663.2 |     2869   |     2626.3 |      36   |      14.7 |      12.5 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_f.txt](../results/details/compare-filesize/20201011-023854/qgis310-bigfile-maxlayer2000/somap310_fix/av_f.txt/dashboard/index.html)                       | somap_fix > av_f.txt                |       514.9  |              2.89 |            22 |            0 |          0 |     23404.7   |         26800.5 |         3347 |        31076 |       30882.1 |       31048   |         31076 |     0.351606 |                46.0939 |           0.144682 |     3615.7 |     2865.6 |     2628.2 |      39.8 |      14.7 |      12.5 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_f.txt](../results/details/compare-filesize/20201011-023854/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt                |       515.16 |              2.94 |            22 |            0 |          0 |     23416.3   |         26875   |         3449 |        31015 |       30702.2 |       30972   |         31015 |     0.351848 |                46.1256 |           0.144781 |     3659.8 |     2876.3 |     2632.5 |      40.6 |      15   |      12.5 |
| [qgis310-bigfile > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201011-023854/qgis310-bigfile/somap310_fix/av_sw.txt/dashboard/index.html)                                               | somap_fix > av_sw.txt               |       382.88 |              0    |            20 |            0 |          0 |     19144.1   |         20424   |         2521 |        26936 |       26776.9 |       26928.8 |         26936 |     0.401011 |               195.293  |           0.163615 |     4727.5 |     2911.7 |     2640.3 |      24.5 |      14.4 |      12.5 |
| [qgis310-bigfile-bigcache > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201011-023854/qgis310-bigfile-bigcache/somap310_fix/av_sw.txt/dashboard/index.html)                             | somap_fix > av_sw.txt               |       386.43 |              0.93 |            20 |            0 |          0 |     19321.6   |         20496   |         2552 |        27483 |       27307.9 |       27474.8 |         27483 |     0.396857 |               193.27   |           0.161921 |     4562.5 |     2915.7 |     2675.7 |      38.8 |      14.4 |      12.4 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201011-023854/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt               |       387.79 |              1.28 |            20 |            0 |          0 |     19389.5   |         20589   |         2665 |        27432 |       27272.9 |       27424.7 |         27432 |     0.395312 |               192.517  |           0.16129  |     4647.6 |     2933.1 |     2635.3 |      40   |      14.7 |      12.5 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201011-023854/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)   | somap_fix > av_sw.txt               |       389.28 |              1.67 |            20 |            0 |          0 |     19464.2   |         20408.5 |         4525 |        28028 |       27785.7 |       28015.9 |         28028 |     0.39353  |               191.649  |           0.160563 |     4381.3 |     2925.9 |     2682.5 |      40.5 |      14.4 |      12.4 |
| [qgis310-bigfile-hugecache > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201011-023854/qgis310-bigfile-hugecache/somap310_fix/av_sw.txt/dashboard/index.html)                           | somap_fix > av_sw.txt               |       390.83 |              2.08 |            20 |            0 |          0 |     19541.4   |         20679   |         4521 |        28107 |       28031.7 |       28104.7 |         28107 |     0.390267 |               190.06   |           0.159232 |     4800.9 |     2948.7 |     2674.9 |      31.5 |      14.3 |      12.6 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-filesize/20201011-023854/qgis310-bigfile-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)                     | somap_fix > av_sw.txt               |       392.08 |              2.4  |            20 |            0 |          0 |     19604     |         21025.5 |         2054 |        28255 |       27938   |       28239.5 |         28255 |     0.390008 |               189.934  |           0.159126 |     4684.4 |     2916.5 |     2612.8 |      41.6 |      14.7 |      12.5 |
| [qgis310-bigfile > somap310_fix > lk.txt](../results/details/compare-filesize/20201011-023854/qgis310-bigfile/somap310_fix/lk.txt/dashboard/index.html)                                                     | somap_fix > lk.txt                  |       421.46 |              0    |            30 |            0 |          0 |     14048.7   |         16553.5 |         1887 |        16830 |       16687.6 |       16773.3 |         16830 |     0.602519 |                16.3318 |           0.246381 |     2660.1 |     2631.5 |     2622.4 |      40   |      13.8 |      12.5 |
| [qgis310-bigfile-hugecache > somap310_fix > lk.txt](../results/details/compare-filesize/20201011-023854/qgis310-bigfile-hugecache/somap310_fix/lk.txt/dashboard/index.html)                                 | somap_fix > lk.txt                  |       424.27 |              0.67 |            30 |            0 |          0 |     14142.3   |         16608   |         1982 |        16895 |       16732.8 |       16818.5 |         16895 |     0.594919 |                16.1258 |           0.243274 |     2661.6 |     2632.2 |     2604.5 |      37.8 |      14   |      12.6 |
| [qgis310-bigfile-bigcache > somap310_fix > lk.txt](../results/details/compare-filesize/20201011-023854/qgis310-bigfile-bigcache/somap310_fix/lk.txt/dashboard/index.html)                                   | somap_fix > lk.txt                  |       425.36 |              0.93 |            30 |            0 |          0 |     14178.5   |         16605   |         1913 |        16866 |       16850   |       16861   |         16866 |     0.594318 |                16.1095 |           0.243028 |     2656.3 |     2632.9 |     2611.9 |      30.9 |      13.7 |      12.5 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201011-023854/qgis310-bigfile-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)                           | somap_fix > lk.txt                  |       428.8  |              1.74 |            30 |            0 |          0 |     14293.2   |         16677.5 |         2009 |        17196 |       16955.5 |       17071.7 |         17196 |     0.587913 |                15.9359 |           0.240409 |     2652.9 |     2629.3 |     2618   |      40.1 |      13.7 |      12.5 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201011-023854/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)         | somap_fix > lk.txt                  |       433.46 |              2.85 |            30 |            0 |          0 |     14448.8   |         16605   |         1919 |        17778 |       17646.8 |       17723.5 |         17778 |     0.586797 |                15.9056 |           0.239953 |     2655.5 |     2631.3 |     2607   |      33   |      13.8 |      12.5 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-filesize/20201011-023854/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt                  |       434.79 |              3.16 |            30 |            0 |          0 |     14493     |         16975   |         2003 |        17452 |       17319.4 |       17383.2 |         17452 |     0.585995 |                15.8839 |           0.239625 |     2653.1 |     2630.1 |     2564.9 |      36.4 |      13.9 |      12.5 |
| [qgis310-smallfile > somap310_grundplanav_farbig > av_f.txt](../results/details/compare-filesize/20201011-023854/qgis310-smallfile/somap310_grundplanav_farbig/av_f.txt/dashboard/index.html)               | somap_grundplanav_farbig > av_f.txt |       114.64 |              0    |            22 |            0 |          0 |      5210.77  |          5392.5 |         2837 |         6745 |        6219   |        6680.5 |          6745 |     1.57842  |               205.812  |           0.672622 |     2412.6 |     2227.6 |     2040.4 |      30.3 |      21.2 |      16.9 |
| [qgis310-smallfile > somap310_grundplanav_sw > av_sw.txt](../results/details/compare-filesize/20201011-023854/qgis310-smallfile/somap310_grundplanav_sw/av_sw.txt/dashboard/index.html)                     | somap_grundplanav_sw > av_sw.txt    |        93.86 |              0    |            20 |            0 |          0 |      4692.75  |          4714   |         2211 |         6257 |        6171.8 |        6252.8 |          6257 |     1.60488  |               499.354  |           0.672043 |     2384.7 |     2200.9 |     2128.2 |      31.1 |      18.5 |      14.6 |
| [qgis310-smallfile > somap310_lk > lk.txt](../results/details/compare-filesize/20201011-023854/qgis310-smallfile/somap310_lk/lk.txt/dashboard/index.html)                                                   | somap_lk > lk.txt                   |        17.71 |              0    |            30 |            0 |          0 |       590.433 |           695.5 |          237 |          783 |         767.9 |         779.7 |           783 |    12.2599   |               332.315  |           5.00134  |     2110.8 |     2083.7 |     2052.2 |      34.2 |      19.8 |       7.4 |

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