# QGIS Benchmark summary compare-major-bigfile (20201101-082505)


compare the effect of different QGIS major version with big filesizes

_run completed in 00h 09m 40s_

_Sample size per configuration 72_
## Summary plot
An interactive summary plot can be found [here](report_compare-major-bigfile_20201101-082505_plot.html)

## Summary
| name    | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 | Global  |                 31   | +0.0%                        |           74.4 | +0.0%                  |          1120   | +0.0%                   |          500 |        13064 |            72 |            0 |     7614.6 |    7298.73 |     5049.2 |      99.7 |   48.7667 |      12.5 |          0 |
| qgis316 | Global  |                130.9 | +322.3%                      |          951.2 | +1178.8%               |         44008.5 | +3829.3%                |         5490 |        68262 |            72 |            0 |     7410.8 |    5673.1  |     5249.3 |      38.7 |   17.8667 |      12.2 |          0 |
| qgis310 | Global  |                194.8 | +528.4%                      |         1458.7 | +1861.1%               |         70372.5 | +6183.3%                |         8793 |        84417 |            72 |            0 |     7157.4 |    5343.4  |     5183.5 |      40.6 |   13.8333 |      12.3 |          0 |

## Aggregated
| name                   | group     |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------|-----------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 > somap218_fix | somap_fix |                 31   | +0.0%                        |           74.4 | +0.0%                  |          1120   | +0.0%                   |          500 |        13064 |            72 |            0 |     7614.6 |    7298.73 |     5049.2 |      99.7 |   48.7667 |      12.5 |          0 |
| qgis316 > somap316_fix | somap_fix |                130.9 | +322.3%                      |          951.2 | +1178.8%               |         44008.5 | +3829.3%                |         5490 |        68262 |            72 |            0 |     7410.8 |    5673.1  |     5249.3 |      38.7 |   17.8667 |      12.2 |          0 |
| qgis310 > somap310_fix | somap_fix |                194.8 | +528.4%                      |         1458.7 | +1861.1%               |         70372.5 | +6183.3%                |         8793 |        84417 |            72 |            0 |     7157.4 |    5343.4  |     5183.5 |      40.6 |   13.8333 |      12.3 |          0 |

## Detail
| name                                                                                                                                               | group                 |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218 > somap218_fix > av_f.txt](../results/details/compare-major-bigfile/20201101-082505/qgis218/somap218_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |                  7.5 | +0.0%                        |           13.1 | +0.0%                  |           316   | +0.0%                   |            22 |            0 |          0 |       596.182 |          190 |         1289 |        1199.6 |       1285.85 |          1289 |    10.8642   |               422.65   |           4.47049  |     7510.1 |     7510.1 |     7510.1 |      41.2 |      41.2 |      41.2 |
| [qgis316 > somap316_fix > av_f.txt](../results/details/compare-major-bigfile/20201101-082505/qgis316/somap316_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |                 73   | +873.3%                      |          596.3 | +4446.6%               |         29638   | +9279.1%                |            22 |            0 |          0 |     27106.2   |         4241 |        38827 |       38224.1 |      38752.4  |         38827 |     0.324623 |                42.557  |           0.133578 |     6264.9 |     5781.4 |     5251.5 |      34.7 |      13.7 |      12.4 |
| [qgis310 > somap310_fix > av_f.txt](../results/details/compare-major-bigfile/20201101-082505/qgis310/somap310_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |                 75.8 | +910.7%                      |          581.5 | +4333.8%               |         30191.5 | +9454.3%                |            22 |            0 |          0 |     26433.7   |         4109 |        35260 |       34802.1 |      35207.2  |         35260 |     0.311734 |                40.8671 |           0.128275 |     6152.1 |     5389.8 |     5183.5 |      36.7 |      14   |      12.3 |
| [qgis218 > somap218_fix > av_sw.txt](../results/details/compare-major-bigfile/20201101-082505/qgis218/somap218_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |                  7.4 | +0.0%                        |           13.7 | +0.0%                  |           719   | +0.0%                   |            20 |            0 |          0 |       685.75  |          251 |         1263 |        1254.9 |       1262.75 |          1263 |     9.9453   |               168.935  |           4.05776  |     7614.6 |     7541   |     7471   |      81.4 |      61.9 |      33.8 |
| [qgis316 > somap316_fix > av_sw.txt](../results/details/compare-major-bigfile/20201101-082505/qgis316/somap316_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |                 49.4 | +567.6%                      |          334.9 | +2342.0%               |         13665   | +1800.6%                |            20 |            0 |          0 |     16746     |          948 |        28564 |       28439   |      28558.5  |         28564 |     0.45255  |               221.279  |           0.184644 |     7410.8 |     5968.2 |     5249.3 |      35.9 |      14.2 |      12.2 |
| [qgis310 > somap310_fix > av_sw.txt](../results/details/compare-major-bigfile/20201101-082505/qgis310/somap310_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |                 60.6 | +718.9%                      |          425.1 | +2999.2%               |         22770.5 | +3067.0%                |            20 |            0 |          0 |     21252.9   |         2589 |        30739 |       30361.2 |      30720.3  |         30739 |     0.361115 |               175.863  |           0.147338 |     7157.4 |     5443.2 |     5209.6 |      39.4 |      13.8 |      12.4 |
| [qgis316 > somap316_fix > lk.txt](../results/details/compare-major-bigfile/20201101-082505/qgis316/somap316_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |                  8.5 | +0.0%                        |           19.9 | +0.0%                  |           705.5 | +730.0%                 |            30 |            0 |          0 |       663.4   |          301 |          871 |         817.9 |        851.2  |           871 |    11.2108   |               303.866  |           4.5843   |     5284.4 |     5269.7 |     5251.5 |      38.7 |      25.7 |      14.1 |
| [qgis218 > somap218_fix > lk.txt](../results/details/compare-major-bigfile/20201101-082505/qgis218/somap218_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |                 16.1 | +89.4%                       |           47.5 | +138.9%                |            85   | +0.0%                   |            30 |            0 |          0 |      1584.93  |           59 |        10512 |        4076.6 |       6978.8  |         10512 |     2.84522  |                47.6554 |           1.16347  |     7525.3 |     6845.1 |     5049.2 |      99.7 |      43.2 |      12.5 |
| [qgis310 > somap310_fix > lk.txt](../results/details/compare-major-bigfile/20201101-082505/qgis310/somap310_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |                 58.4 | +587.1%                      |          452.1 | +2171.5%               |         17410.5 | +20382.9%               |            30 |            0 |          0 |     15069.3   |         2095 |        18418 |       18242.7 |      18352.5  |         18418 |     0.563751 |                15.2815 |           0.230529 |     5215   |     5197.2 |     5185.6 |      40.6 |      13.7 |      12.5 |

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
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
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
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
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
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
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
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
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