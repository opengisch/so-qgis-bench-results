# QGIS Benchmark summary compare-major-bigfile (20201111-013826)


compare the effect of different QGIS major version with big filesizes

_run completed in 00h 09m 53s_

_Sample size per configuration 72_
## Summary plot
An interactive summary plot can be found [here](report_compare-major-bigfile_20201111-013826_plot.html)

## Summary
| name    | group   |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 | Global  |             37.6 | +0.0%                    |              54.1 | +0.0%                     |           80.9 | +0.0%                  |          1484   | +0.0%                   |          481 |        21023 |              1.6 |            72 |            0 |     5928.1 |    5584.7  |     3296.2 |      99.9 |   40.3    |       4.7 |          0 |
| qgis316 | Global  |            126.1 | +235.4%                  |              61.5 | +13.7%                    |          919.1 | +1036.6%               |         42866.5 | +2788.6%                |         5303 |        65515 |             13.1 |            72 |            0 |     5832   |    3942.77 |     3519.3 |      38   |   14.9667 |      12.1 |          0 |
| qgis310 | Global  |            188.3 | +400.8%                  |              66.4 | +22.7%                    |         1408.2 | +1641.4%               |         68296.5 | +4502.2%                |        10527 |        80464 |             13.1 |            72 |            0 |     5458   |    3623.87 |     3467.3 |      33.2 |   13.4667 |      12.2 |          0 |

## Aggregated
| name                   | group     |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------|-----------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 > somap218_fix | somap_fix |             37.6 | +0.0%                    |              54.1 | +0.0%                     |           80.9 | +0.0%                  |          1484   | +0.0%                   |          481 |        21023 |              1.6 |            72 |            0 |     5928.1 |    5584.7  |     3296.2 |      99.9 |   40.3    |       4.7 |          0 |
| qgis316 > somap316_fix | somap_fix |            126.1 | +235.4%                  |              61.5 | +13.7%                    |          919.1 | +1036.6%               |         42866.5 | +2788.6%                |         5303 |        65515 |             13.1 |            72 |            0 |     5832   |    3942.77 |     3519.3 |      38   |   14.9667 |      12.1 |          0 |
| qgis310 > somap310_fix | somap_fix |            188.3 | +400.8%                  |              66.4 | +22.7%                    |         1408.2 | +1641.4%               |         68296.5 | +4502.2%                |        10527 |        80464 |             13.1 |            72 |            0 |     5458   |    3623.87 |     3467.3 |      33.2 |   13.4667 |      12.2 |          0 |

## Detail
| name                                                                                                                                               | group                 |   tests duration | tests duration penalty   |   warmup duration | warmup duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|------------------|--------------------------|-------------------|---------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218 > somap218_fix > av_f.txt](../results/details/compare-major-bigfile/20201111-013826/qgis218/somap218_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |              7.2 | +0.0%                    |               0.1 | +0.0%                     |           13.2 | +0.0%                  |           602   | +0.0%                   |            22 |            0 |          0 |       600.409 |          219 |         1282 |        1171.8 |       1277.8  |          1282 |    10.8642   |               422.65   |           4.47049  |              0.8 |     5861.6 |     5797.2 |     5738.7 |      77.2 |      56.4 |      23.3 |
| [qgis316 > somap316_fix > av_f.txt](../results/details/compare-major-bigfile/20201111-013826/qgis316/somap316_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |             70.8 | +883.3%                  |               0.1 | +0.0%                     |          577.9 | +4275.2%               |         28670.5 | +4662.5%                |            22 |            0 |          0 |     26268.9   |         3913 |        37764 |       37325.1 |      37727.1  |         37764 |     0.334428 |                43.7559 |           0.137613 |              2.8 |     4530.8 |     4047.2 |     3527   |      38   |      13.6 |      12.3 |
| [qgis310 > somap310_fix > av_f.txt](../results/details/compare-major-bigfile/20201111-013826/qgis310/somap310_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |             72.8 | +911.1%                  |               0.1 | +0.0%                     |          559.3 | +4134.5%               |         29105.5 | +4734.8%                |            22 |            0 |          0 |     25424.1   |         3702 |        33920 |       33705.5 |      33899.8  |         33920 |     0.323296 |                42.3005 |           0.133033 |              2.8 |     4438.3 |     3677.6 |     3467.3 |      23.9 |      13.3 |      12.4 |
| [qgis218 > somap218_fix > av_sw.txt](../results/details/compare-major-bigfile/20201111-013826/qgis218/somap218_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |             15.3 | +0.0%                    |              25.3 | +25200.0%                 |           22.2 | +0.0%                  |           811   | +0.0%                   |            20 |            0 |          0 |      1112.15  |          207 |        10076 |        1256.9 |       9635.15 |         10076 |     1.98491  |                33.7165 |           0.809861 |              0.3 |     5928.1 |     5912.2 |     5856.9 |      94.7 |      26   |      12.5 |
| [qgis316 > somap316_fix > av_sw.txt](../results/details/compare-major-bigfile/20201111-013826/qgis316/somap316_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |             47.4 | +209.8%                  |               0.1 | +0.0%                     |          322.3 | +1348.9%               |         13514   | +1566.3%                |            20 |            0 |          0 |     16114.4   |         1106 |        26935 |       26769.3 |      26927.2  |         26935 |     0.472244 |               230.42   |           0.192679 |              9.5 |     5832   |     4234   |     3534.2 |      28.3 |      13.9 |      12.1 |
| [qgis310 > somap310_fix > av_sw.txt](../results/details/compare-major-bigfile/20201111-013826/qgis310/somap310_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |             59.2 | +286.9%                  |               0.1 | +0.0%                     |          414.9 | +1765.4%               |         22200   | +2637.4%                |            20 |            0 |          0 |     20746.4   |         4840 |        29320 |       29222.6 |      29315.2  |         29320 |     0.368568 |               179.559  |           0.150379 |              9.5 |     5458   |     3720.9 |     3468.3 |      33.2 |      13.7 |      12.2 |
| [qgis316 > somap316_fix > lk.txt](../results/details/compare-major-bigfile/20201111-013826/qgis316/somap316_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |              7.9 | +0.0%                    |              61.3 | +113.6%                   |           18.9 | +0.0%                  |           682   | +860.6%                 |            30 |            0 |          0 |       630.467 |          284 |          816 |         791.6 |        808.3  |           816 |    11.646    |               315.662  |           4.76226  |              0.8 |     3568.1 |     3547.1 |     3519.3 |      25.8 |      17.4 |      12.5 |
| [qgis218 > somap218_fix > lk.txt](../results/details/compare-major-bigfile/20201111-013826/qgis218/somap218_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |             15.1 | +91.1%                   |              28.7 | +0.0%                     |           45.4 | +140.1%                |            71   | +0.0%                   |            30 |            0 |          0 |      1513.87  |           55 |         9665 |        4061.9 |       6596.55 |          9665 |     3.10398  |                51.9895 |           1.26928  |              0.5 |     5786.8 |     5044.7 |     3296.2 |      99.9 |      38.5 |       4.7 |
| [qgis310 > somap310_fix > lk.txt](../results/details/compare-major-bigfile/20201111-013826/qgis310/somap310_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |             56.3 | +612.7%                  |              66.2 | +130.7%                   |          434   | +2194.5%               |         16991   | +23831.0%               |            30 |            0 |          0 |     14466.2   |         1985 |        17224 |       17152.6 |      17210.8  |         17224 |     0.583363 |                15.8131 |           0.238548 |              0.8 |     3481.2 |     3473.1 |     3469.2 |      31.1 |      13.4 |      12.4 |

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
description: 'compare the effect of different QGIS major version with big filesizes'

test-cases:
  qgis218:
    active: yes
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    compose-variables:
      QGIS_REPLICAS: '1'
      QGIS_FCGI_PROCESSES: '1'
      PG_SERVICE: 'pg_service.conf'
    projects:
      somap218_fix:
        - lk.txt
        - av_f.txt
        - av_sw.txt

  qgis310:
    active: yes
    template: docker-compose-qgis-3-nginx
    inherit: qgis218
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10-ubuntu'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_SERVER_MAX_THREADS: '1'
    projects:
      somap310_fix:
        - lk.txt
        - av_f.txt
        - av_sw.txt

  qgis316:
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.16-ubuntu'
    projects:
      somap316_fix:
        - lk.txt
        - av_f.txt
        - av_sw.txt

```
### parsed test configurations

```
description: compare the effect of different QGIS major version with big filesizes
test-cases:
  qgis218:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '1'
    path-prefix: ows
    projects:
      somap218_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt
    template: docker-compose-qgis-2
  qgis310:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: 3.10-ubuntu
    inherit: qgis218
    path-prefix: ogc
    projects:
      somap310_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx
  qgis316:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: 3.16-ubuntu
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap316_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx

```