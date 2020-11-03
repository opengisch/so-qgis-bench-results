# QGIS Benchmark summary compare-major-bigfile (20201103-032353)


compare the effect of different QGIS major version with big filesizes

_run completed in 00h 09m 34s_

_Sample size per configuration 72_
## Summary plot
An interactive summary plot can be found [here](report_compare-major-bigfile_20201103-032353_plot.html)

## Summary
| name    | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 | Global  |                 31.1 | +0.0%                        |           73.9 | +0.0%                  |          1392.5 | +0.0%                   |          486 |        12917 |              1.6 |            72 |            0 |     5217.2 |    4895.2  |     2627.2 |      99.9 |   41.1    |       1.5 |          0 |
| qgis316 | Global  |                129   | +314.8%                      |          936.7 | +1167.3%               |         43752   | +3042.0%                |         5378 |        66642 |             13.2 |            72 |            0 |     4987   |    3266.63 |     2803.2 |      39.3 |   16.2    |      12.4 |          0 |
| qgis310 | Global  |                190.3 | +511.9%                      |         1420.2 | +1821.4%               |         69348.5 | +4880.1%                |         8447 |        81849 |             13.1 |            72 |            0 |     4838.1 |    2964.3  |     2770.9 |      39.2 |   13.7333 |      12.3 |          0 |

## Aggregated
| name                   | group     |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------|-----------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 > somap218_fix | somap_fix |                 31.1 | +0.0%                        |           73.9 | +0.0%                  |          1392.5 | +0.0%                   |          486 |        12917 |              1.6 |            72 |            0 |     5217.2 |    4895.2  |     2627.2 |      99.9 |   41.1    |       1.5 |          0 |
| qgis316 > somap316_fix | somap_fix |                129   | +314.8%                      |          936.7 | +1167.3%               |         43752   | +3042.0%                |         5378 |        66642 |             13.2 |            72 |            0 |     4987   |    3266.63 |     2803.2 |      39.3 |   16.2    |      12.4 |          0 |
| qgis310 > somap310_fix | somap_fix |                190.3 | +511.9%                      |         1420.2 | +1821.4%               |         69348.5 | +4880.1%                |         8447 |        81849 |             13.1 |            72 |            0 |     4838.1 |    2964.3  |     2770.9 |      39.2 |   13.7333 |      12.3 |          0 |

## Detail
| name                                                                                                                                               | group                 |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218 > somap218_fix > av_f.txt](../results/details/compare-major-bigfile/20201103-032353/qgis218/somap218_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |                  7.5 | +0.0%                        |           13.2 | +0.0%                  |           482.5 | +0.0%                   |            22 |            0 |          0 |       600.045 |          211 |         1300 |        1195.2 |       1297.15 |          1300 |    10.9019   |               424.117  |           4.48599  |              0.8 |     5130.9 |     5130.9 |     5130.9 |      26.3 |      26.3 |      26.3 |
| [qgis316 > somap316_fix > av_f.txt](../results/details/compare-major-bigfile/20201103-032353/qgis316/somap316_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |                 72.7 | +869.3%                      |          591.9 | +4383.6%               |         29438.5 | +6001.2%                |            22 |            0 |          0 |     26903.6   |         4082 |        38546 |       38086.8 |      38478.2  |         38546 |     0.326739 |                42.8344 |           0.134449 |              2.8 |     3774.8 |     3355.6 |     2849.3 |      39.3 |      13.9 |      12.4 |
| [qgis310 > somap310_fix > av_f.txt](../results/details/compare-major-bigfile/20201103-032353/qgis310/somap310_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |                 74   | +886.7%                      |          569.9 | +4216.7%               |         29482   | +6010.3%                |            22 |            0 |          0 |     25902.5   |         3853 |        34861 |       34468.5 |      34818.6  |         34861 |     0.319192 |                41.8449 |           0.131344 |              2.8 |     3688.5 |     3007.7 |     2803   |      39.2 |      13.8 |      12.3 |
| [qgis218 > somap218_fix > av_sw.txt](../results/details/compare-major-bigfile/20201103-032353/qgis218/somap218_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |                  7.6 | +0.0%                        |           13.8 | +0.0%                  |           836   | +0.0%                   |            20 |            0 |          0 |       690.9   |          222 |         1265 |        1255.4 |       1264.85 |          1265 |    10.0553   |               170.803  |           4.10264  |              0.3 |     5217.2 |     5133.4 |     5045.9 |      88.5 |      60.5 |      28.2 |
| [qgis316 > somap316_fix > av_sw.txt](../results/details/compare-major-bigfile/20201103-032353/qgis316/somap316_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |                 48.1 | +532.9%                      |          325.1 | +2252.9%               |         13581   | +1524.5%                |            20 |            0 |          0 |     16256     |         1018 |        27255 |       27154.8 |      27250.7  |         27255 |     0.467727 |               228.722  |           0.190836 |              9.6 |     4987   |     3567.3 |     2803.2 |      39   |      14.8 |      12.4 |
| [qgis310 > somap310_fix > av_sw.txt](../results/details/compare-major-bigfile/20201103-032353/qgis310/somap310_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |                 59.7 | +685.5%                      |          418.3 | +2927.3%               |         23103.5 | +2663.6%                |            20 |            0 |          0 |     20915.8   |         2594 |        29784 |       29665.2 |      29778.7  |         29784 |     0.367074 |               178.766  |           0.149769 |              9.5 |     4838.1 |     3072.3 |     2820.3 |      33.4 |      13.8 |      12.3 |
| [qgis316 > somap316_fix > lk.txt](../results/details/compare-major-bigfile/20201103-032353/qgis316/somap316_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |                  8.2 | +0.0%                        |           19.7 | +0.0%                  |           732.5 | +889.9%                 |            30 |            0 |          0 |       657.1   |          278 |          841 |         827.8 |        834.95 |           841 |    11.2233   |               304.207  |           4.58944  |              0.8 |     2889.8 |     2877   |     2863.5 |      30.4 |      19.9 |      14.3 |
| [qgis218 > somap218_fix > lk.txt](../results/details/compare-major-bigfile/20201103-032353/qgis218/somap218_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |                 16   | +95.1%                       |           46.9 | +137.9%                |            74   | +0.0%                   |            30 |            0 |          0 |      1563.13  |           53 |        10352 |        4077.1 |       6913.4  |         10352 |     2.89771  |                48.5346 |           1.18493  |              0.5 |     5119.4 |     4421.3 |     2627.2 |      99.9 |      36.5 |       1.5 |
| [qgis310 > somap310_fix > lk.txt](../results/details/compare-major-bigfile/20201103-032353/qgis310/somap310_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |                 56.6 | +590.2%                      |          432   | +2091.6%               |         16763   | +22552.7%               |            30 |            0 |          0 |     14400.9   |         2000 |        17204 |       17044   |      17180.9  |         17204 |     0.585297 |                15.8656 |           0.239339 |              0.8 |     2832.2 |     2812.9 |     2770.9 |      32   |      13.6 |      12.5 |

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
      QGIS_VERSION: '3.10'
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
      QGIS_VERSION: '3.16'
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
      QGIS_VERSION: '3.10'
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
      QGIS_VERSION: '3.16'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap316_fix:
      - lk.txt
      - av_f.txt
      - av_sw.txt
    template: docker-compose-qgis-3-nginx

```