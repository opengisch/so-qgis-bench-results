# QGIS Benchmark summary compare-bigfile-settings (20201103-023108)


compare the effect of different QGIS settings with big file size in QGIS 3.10

_run completed in 00h 27m 24s_

_Sample size per configuration 72_
## Summary plot
An interactive summary plot can be found [here](report_compare-bigfile-settings_20201103-023108_plot.html)

## Summary
| name                                   | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|----------------------------------------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-bigfile-hugecache              | Global  |                179.3 | +0.0%                        |         1331.9 | +0.0%                  |         63903.5 | +0.0%                   |         7872 |        76114 |             13.1 |            72 |            0 |     4796.5 |    2987.23 |     2752.4 |      39.7 |   14.5    |      12.4 |          0 |
| qgis310-bigfile-bigcache-maxlayer2000  | Global  |                179.5 | +0.1%                        |         1332.9 | +0.1%                  |         64008   | +0.2%                   |         8264 |        76081 |             13.1 |            72 |            0 |     4716.6 |    2961.77 |     2769.6 |      39.5 |   14.4333 |      12.4 |          0 |
| qgis310-bigfile-bigcache               | Global  |                180.5 | +0.7%                        |         1336.7 | +0.4%                  |         64386.5 | +0.8%                   |         7856 |        76573 |             13.1 |            72 |            0 |     4731.8 |    2980.43 |     2766.1 |      41   |   14.4667 |      12.4 |          0 |
| qgis310-bigfile                        | Global  |                181.3 | +1.1%                        |         1346.1 | +1.1%                  |         64683   | +1.2%                   |         8258 |        76457 |             13.1 |            72 |            0 |     4927.4 |    2984.57 |     2723.3 |      37.6 |   14.7333 |      12.4 |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 | Global  |                181.4 | +1.2%                        |         1340.4 | +0.6%                  |         64480.5 | +0.9%                   |         9983 |        76505 |             13.1 |            72 |            0 |     5014.4 |    2981.83 |     2768.8 |      34.8 |   14.3667 |      12.4 |          0 |
| qgis310-bigfile-maxlayer2000           | Global  |                182.4 | +1.7%                        |         1357.4 | +1.9%                  |         65192.5 | +2.0%                   |        10129 |        77397 |             13.1 |            72 |            0 |     4686.6 |    2985.9  |     2753.4 |      35.2 |   14.4333 |      12.5 |          0 |

## Aggregated
| name                                                  | group     |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|-------------------------------------------------------|-----------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis310-bigfile-hugecache > somap310_fix              | somap_fix |                179.3 | +0.0%                        |         1331.9 | +0.0%                  |         63903.5 | +0.0%                   |         7872 |        76114 |             13.1 |            72 |            0 |     4796.5 |    2987.23 |     2752.4 |      39.7 |   14.5    |      12.4 |          0 |
| qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix  | somap_fix |                179.5 | +0.1%                        |         1332.9 | +0.1%                  |         64008   | +0.2%                   |         8264 |        76081 |             13.1 |            72 |            0 |     4716.6 |    2961.77 |     2769.6 |      39.5 |   14.4333 |      12.4 |          0 |
| qgis310-bigfile-bigcache > somap310_fix               | somap_fix |                180.5 | +0.7%                        |         1336.7 | +0.4%                  |         64386.5 | +0.8%                   |         7856 |        76573 |             13.1 |            72 |            0 |     4731.8 |    2980.43 |     2766.1 |      41   |   14.4667 |      12.4 |          0 |
| qgis310-bigfile > somap310_fix                        | somap_fix |                181.3 | +1.1%                        |         1346.1 | +1.1%                  |         64683   | +1.2%                   |         8258 |        76457 |             13.1 |            72 |            0 |     4927.4 |    2984.57 |     2723.3 |      37.6 |   14.7333 |      12.4 |          0 |
| qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix | somap_fix |                181.4 | +1.2%                        |         1340.4 | +0.6%                  |         64480.5 | +0.9%                   |         9983 |        76505 |             13.1 |            72 |            0 |     5014.4 |    2981.83 |     2768.8 |      34.8 |   14.3667 |      12.4 |          0 |
| qgis310-bigfile-maxlayer2000 > somap310_fix           | somap_fix |                182.4 | +1.7%                        |         1357.4 | +1.9%                  |         65192.5 | +2.0%                   |        10129 |        77397 |             13.1 |            72 |            0 |     4686.6 |    2985.9  |     2753.4 |      35.2 |   14.4333 |      12.5 |          0 |

## Detail
| name                                                                                                                                                                                                                | group                 |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis310-bigfile-hugecache > somap310_fix > av_f.txt](../results/details/compare-bigfile-settings/20201103-023108/qgis310-bigfile-hugecache/somap310_fix/av_f.txt/dashboard/index.html)                             | somap_fix > av_f.txt  |                 66.7 | +0.0%                        |          508.6 | +0.0%                  |         26435   | +0.0%                   |            22 |            0 |          0 |       23117   |         3350 |        31125 |       30783.1 |       31079.2 |         31125 |     0.356743 |                46.7677 |           0.146796 |              2.8 |     3787.6 |     3042.9 |     2776   |      38   |      15   |      12.4 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_f.txt](../results/details/compare-bigfile-settings/20201103-023108/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_f.txt/dashboard/index.html)     | somap_fix > av_f.txt  |                 67.3 | +0.9%                        |          512.2 | +0.7%                  |         26646.5 | +0.8%                   |            22 |            0 |          0 |       23282.3 |         3486 |        31136 |       30829   |       31102.5 |         31136 |     0.35421  |                46.4356 |           0.145753 |              2.8 |     3805   |     3002.9 |     2782.1 |      39.1 |      15.1 |      12.4 |
| [qgis310-bigfile > somap310_fix > av_f.txt](../results/details/compare-bigfile-settings/20201103-023108/qgis310-bigfile/somap310_fix/av_f.txt/dashboard/index.html)                                                 | somap_fix > av_f.txt  |                 67.4 | +1.0%                        |          511.6 | +0.6%                  |         26491   | +0.2%                   |            22 |            0 |          0 |       23256.8 |         3571 |        30924 |       30793.3 |       30906.2 |         30924 |     0.354902 |                46.5263 |           0.146038 |              2.8 |     3798   |     3045.2 |     2771.5 |      26.4 |      15.1 |      12.5 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_f.txt](../results/details/compare-bigfile-settings/20201103-023108/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |                 67.7 | +1.5%                        |          511.3 | +0.5%                  |         26565.5 | +0.5%                   |            22 |            0 |          0 |       23240.5 |         3328 |        31035 |       30661.8 |       30988.2 |         31035 |     0.353306 |                46.3171 |           0.145381 |              2.8 |     3793.3 |     3037.4 |     2779   |      34.8 |      14.9 |      12.5 |
| [qgis310-bigfile-bigcache > somap310_fix > av_f.txt](../results/details/compare-bigfile-settings/20201103-023108/qgis310-bigfile-bigcache/somap310_fix/av_f.txt/dashboard/index.html)                               | somap_fix > av_f.txt  |                 67.9 | +1.8%                        |          515.3 | +1.3%                  |         26814   | +1.4%                   |            22 |            0 |          0 |       23422.8 |         3175 |        31351 |       30991.4 |       31306.6 |         31351 |     0.350872 |                45.9979 |           0.144379 |              2.8 |     3841.1 |     3045.5 |     2774.3 |      39.1 |      15.1 |      12.5 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_f.txt](../results/details/compare-bigfile-settings/20201103-023108/qgis310-bigfile-maxlayer2000/somap310_fix/av_f.txt/dashboard/index.html)                       | somap_fix > av_f.txt  |                 67.9 | +1.8%                        |          519   | +2.1%                  |         27036   | +2.3%                   |            22 |            0 |          0 |       23593   |         3456 |        31732 |       31304   |       31683.5 |         31732 |     0.350536 |                45.954  |           0.144241 |              2.8 |     3781.9 |     3032.7 |     2780   |      31.9 |      14.9 |      12.5 |
| [qgis310-bigfile-hugecache > somap310_fix > av_sw.txt](../results/details/compare-bigfile-settings/20201103-023108/qgis310-bigfile-hugecache/somap310_fix/av_sw.txt/dashboard/index.html)                           | somap_fix > av_sw.txt |                 55.7 | +0.0%                        |          386.7 | +0.0%                  |         20390.5 | +0.0%                   |            20 |            0 |          0 |       19334.8 |         2530 |        27703 |       27554.9 |       27695.8 |         27703 |     0.39546  |               192.59   |           0.161351 |              9.5 |     4796.5 |     3138.1 |     2868.3 |      39.7 |      14.6 |      12.4 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-bigfile-settings/20201103-023108/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)   | somap_fix > av_sw.txt |                 55.9 | +0.4%                        |          389.9 | +0.8%                  |         20641.5 | +1.2%                   |            20 |            0 |          0 |       19494.6 |         2771 |        27739 |       27477.9 |       27726   |         27739 |     0.393561 |               191.665  |           0.160576 |              9.5 |     4716.6 |     3100.3 |     2831.4 |      30.8 |      14.6 |      12.5 |
| [qgis310-bigfile > somap310_fix > av_sw.txt](../results/details/compare-bigfile-settings/20201103-023108/qgis310-bigfile/somap310_fix/av_sw.txt/dashboard/index.html)                                               | somap_fix > av_sw.txt |                 56.2 | +0.9%                        |          391.2 | +1.2%                  |         20831   | +2.2%                   |            20 |            0 |          0 |       19562.1 |         2618 |        27891 |       27791.6 |       27886.5 |         27891 |     0.391972 |               190.891  |           0.159928 |              9.5 |     4927.4 |     3130   |     2835.8 |      36.1 |      14.8 |      12.4 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-bigfile-settings/20201103-023108/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |                 56.3 | +1.1%                        |          391.9 | +1.3%                  |         20934   | +2.7%                   |            20 |            0 |          0 |       19593.7 |         4563 |        27946 |       27713.7 |       27935   |         27946 |     0.392226 |               191.015  |           0.160031 |              9.5 |     5014.4 |     3131.1 |     2829.1 |      32.8 |      14.6 |      12.4 |
| [qgis310-bigfile-bigcache > somap310_fix > av_sw.txt](../results/details/compare-bigfile-settings/20201103-023108/qgis310-bigfile-bigcache/somap310_fix/av_sw.txt/dashboard/index.html)                             | somap_fix > av_sw.txt |                 56.4 | +1.3%                        |          391.3 | +1.2%                  |         20773.5 | +1.9%                   |            20 |            0 |          0 |       19564.5 |         2649 |        28242 |       27842.4 |       28222.2 |         28242 |     0.392065 |               190.936  |           0.159965 |              9.5 |     4731.8 |     3117.3 |     2838.1 |      37.6 |      14.6 |      12.4 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > av_sw.txt](../results/details/compare-bigfile-settings/20201103-023108/qgis310-bigfile-maxlayer2000/somap310_fix/av_sw.txt/dashboard/index.html)                     | somap_fix > av_sw.txt |                 56.7 | +1.8%                        |          392.6 | +1.5%                  |         20885   | +2.4%                   |            20 |            0 |          0 |       19628.8 |         4521 |        28049 |       27921.1 |       28042.7 |         28049 |     0.389613 |               189.742  |           0.158965 |              9.5 |     4686.6 |     3144.8 |     2858.9 |      35.2 |      14.6 |      12.5 |
| [qgis310-bigfile-bigcache > somap310_fix > lk.txt](../results/details/compare-bigfile-settings/20201103-023108/qgis310-bigfile-bigcache/somap310_fix/lk.txt/dashboard/index.html)                                   | somap_fix > lk.txt    |                 56.2 | +0.0%                        |          430.1 | +0.0%                  |         16799   | +0.5%                   |            30 |            0 |          0 |       14338.3 |         2032 |        16980 |       16904.3 |       16949.2 |         16980 |     0.588247 |                15.9455 |           0.240545 |              0.8 |     2801.3 |     2778.5 |     2766.1 |      41   |      13.7 |      12.5 |
| [qgis310-bigfile-bigcache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-bigfile-settings/20201103-023108/qgis310-bigfile-bigcache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)         | somap_fix > lk.txt    |                 56.3 | +0.2%                        |          430.8 | +0.2%                  |         16720   | +0.0%                   |            30 |            0 |          0 |       14361.4 |         2007 |        17206 |       17167.6 |       17198.8 |         17206 |     0.589067 |                15.9677 |           0.240881 |              0.8 |     2804.3 |     2782.1 |     2769.6 |      39.5 |      13.6 |      12.5 |
| [qgis310-bigfile-hugecache > somap310_fix > lk.txt](../results/details/compare-bigfile-settings/20201103-023108/qgis310-bigfile-hugecache/somap310_fix/lk.txt/dashboard/index.html)                                 | somap_fix > lk.txt    |                 56.9 | +1.2%                        |          436.6 | +1.5%                  |         17078   | +2.1%                   |            30 |            0 |          0 |       14553.6 |         1992 |        17286 |       17247.1 |       17281   |         17286 |     0.581193 |                15.7543 |           0.237661 |              0.8 |     2804.6 |     2780.7 |     2752.4 |      27.8 |      13.9 |      12.4 |
| [qgis310-bigfile-hugecache-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-bigfile-settings/20201103-023108/qgis310-bigfile-hugecache-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |                 57.4 | +2.1%                        |          437.2 | +1.6%                  |         16981   | +1.6%                   |            30 |            0 |          0 |       14574.1 |         2092 |        17524 |       17306.9 |       17494.3 |         17524 |     0.576779 |                15.6347 |           0.235856 |              0.8 |     2807.5 |     2777   |     2768.8 |      33.7 |      13.6 |      12.5 |
| [qgis310-bigfile > somap310_fix > lk.txt](../results/details/compare-bigfile-settings/20201103-023108/qgis310-bigfile/somap310_fix/lk.txt/dashboard/index.html)                                                     | somap_fix > lk.txt    |                 57.7 | +2.7%                        |          443.2 | +3.0%                  |         17361   | +3.8%                   |            30 |            0 |          0 |       14772.3 |         2069 |        17642 |       17600.7 |       17640.9 |         17642 |     0.572552 |                15.5201 |           0.234127 |              0.8 |     2801.7 |     2778.5 |     2723.3 |      37.6 |      14.3 |      12.4 |
| [qgis310-bigfile-maxlayer2000 > somap310_fix > lk.txt](../results/details/compare-bigfile-settings/20201103-023108/qgis310-bigfile-maxlayer2000/somap310_fix/lk.txt/dashboard/index.html)                           | somap_fix > lk.txt    |                 57.8 | +2.8%                        |          445.8 | +3.6%                  |         17271.5 | +3.3%                   |            30 |            0 |          0 |       14860.1 |         2152 |        17616 |       17573.1 |       17600.6 |         17616 |     0.570657 |                15.4687 |           0.233353 |              0.8 |     2808.2 |     2780.2 |     2753.4 |      27.8 |      13.8 |      12.5 |

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
description: 'compare the effect of different QGIS settings with big file size in QGIS 3.10'

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
      QGIS_SERVER_CACHE_SIZE: '50'
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

```
### parsed test configurations

```
description: compare the effect of different QGIS settings with big file size in QGIS
  3.10
test-cases:
  qgis310-bigfile:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '8'
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
      QGIS_SERVER_MAX_THREADS: '8'
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
      QGIS_SERVER_MAX_THREADS: '8'
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
      QGIS_SERVER_MAX_THREADS: '8'
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
      QGIS_SERVER_MAX_THREADS: '8'
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
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '8'
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

```