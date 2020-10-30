# QGIS Benchmark summary compare-major-bigfile (20201029-220951)


compare the effect of different QGIS major version with big filesizes

_run completed in 00h 09m 35s_

_Sample size per configuration 72_
## Summary plot
An interactive summary plot can be found [here](report_compare-major-bigfile_20201029-220951_plot.html)

## Summary
| name    | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 | Global  |                 32.1 | +0.0%                        |           75.2 | +0.0%                  |          1354   | +0.0%                   |          510 |        13849 |            72 |            0 |     6732.2 |    6455.07 |     4141   |      99.8 |   53.1333 |      12.5 |          0 |
| qgis316 | Global  |                129.1 | +302.2%                      |          938.2 | +1148.0%               |         43561.5 | +3117.2%                |         5495 |        66652 |            72 |            0 |     6583.2 |    4773.63 |     4352.3 |      37.6 |   19.3333 |      12.3 |          0 |
| qgis310 | Global  |                189.6 | +490.7%                      |         1418.3 | +1786.5%               |         68539.5 | +4962.0%                |         8191 |        81426 |            72 |            0 |     6351.9 |    4479.9  |     4303.4 |      38   |   13.9    |      12.2 |          0 |

## Aggregated
| name                   | group     |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------|-----------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 > somap218_fix | somap_fix |                 32.1 | +0.0%                        |           75.2 | +0.0%                  |          1354   | +0.0%                   |          510 |        13849 |            72 |            0 |     6732.2 |    6455.07 |     4141   |      99.8 |   53.1333 |      12.5 |          0 |
| qgis316 > somap316_fix | somap_fix |                129.1 | +302.2%                      |          938.2 | +1148.0%               |         43561.5 | +3117.2%                |         5495 |        66652 |            72 |            0 |     6583.2 |    4773.63 |     4352.3 |      37.6 |   19.3333 |      12.3 |          0 |
| qgis310 > somap310_fix | somap_fix |                189.6 | +490.7%                      |         1418.3 | +1786.5%               |         68539.5 | +4962.0%                |         8191 |        81426 |            72 |            0 |     6351.9 |    4479.9  |     4303.4 |      38   |   13.9    |      12.2 |          0 |

## Detail
| name                                                                                                                                               | group                 |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218 > somap218_fix > av_f.txt](../results/details/compare-major-bigfile/20201029-220951/qgis218/somap218_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |                  7.4 | +0.0%                        |           13.3 | +0.0%                  |           485   | +0.0%                   |            22 |            0 |          0 |       606.136 |          229 |         1295 |        1174.4 |       1291.4  |          1295 |    11.0331   |               429.221  |           4.53999  |     6700.1 |     6700.1 |     6700.1 |      56.5 |      56.5 |      56.5 |
| [qgis316 > somap316_fix > av_f.txt](../results/details/compare-major-bigfile/20201029-220951/qgis316/somap316_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |                 72.7 | +882.4%                      |          592.2 | +4341.2%               |         29439   | +5969.9%                |            22 |            0 |          0 |     26919.8   |         4177 |        38314 |       37974   |      38267.9  |         38314 |     0.326337 |                42.7817 |           0.134284 |     5387.2 |     4885.1 |     4352.3 |      33.2 |      13.8 |      12.3 |
| [qgis310 > somap310_fix > av_f.txt](../results/details/compare-major-bigfile/20201029-220951/qgis310/somap310_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |                 72.8 | +883.8%                      |          558.8 | +4090.5%               |         28887.5 | +5856.2%                |            22 |            0 |          0 |     25400.3   |         3517 |        34072 |       33765.3 |      34035.4  |         34072 |     0.324949 |                42.5995 |           0.133712 |     5323.6 |     4547.3 |     4303.4 |      35.4 |      13.7 |      12.2 |
| [qgis218 > somap218_fix > av_sw.txt](../results/details/compare-major-bigfile/20201029-220951/qgis218/somap218_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |                  7.5 | +0.0%                        |           14.1 | +0.0%                  |           787   | +0.0%                   |            20 |            0 |          0 |       704.65  |          224 |         1324 |        1235.8 |       1319.6  |          1324 |     9.48767  |               161.161  |           3.87104  |     6732.2 |     6669.8 |     6597.1 |      83.1 |      63.3 |      38.4 |
| [qgis316 > somap316_fix > av_sw.txt](../results/details/compare-major-bigfile/20201029-220951/qgis316/somap316_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |                 48   | +540.0%                      |          325.9 | +2212.4%               |         13393.5 | +1601.8%                |            20 |            0 |          0 |     16294.3   |         1018 |        27468 |       27234   |      27456.5  |         27468 |     0.467716 |               228.702  |           0.190832 |     6583.2 |     5055.3 |     4405.9 |      37.5 |      14.2 |      12.3 |
| [qgis310 > somap310_fix > av_sw.txt](../results/details/compare-major-bigfile/20201029-220951/qgis310/somap310_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |                 59.1 | +688.0%                      |          416.7 | +2856.5%               |         22502   | +2759.2%                |            20 |            0 |          0 |     20832.8   |         2549 |        29690 |       29479.9 |      29680.2  |         29690 |     0.369645 |               180.017  |           0.150818 |     6351.9 |     4573.6 |     4312.4 |      37.1 |      14.1 |      12.2 |
| [qgis316 > somap316_fix > lk.txt](../results/details/compare-major-bigfile/20201029-220951/qgis316/somap316_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |                  8.4 | +0.0%                        |           20.1 | +0.0%                  |           729   | +789.0%                 |            30 |            0 |          0 |       669.567 |          300 |          870 |         850   |        861.75 |           870 |    11.0906   |               300.609  |           4.53515  |     4387.3 |     4380.5 |     4373.8 |      37.6 |      30   |      22.3 |
| [qgis218 > somap218_fix > lk.txt](../results/details/compare-major-bigfile/20201029-220951/qgis218/somap218_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |                 17.2 | +104.8%                      |           47.8 | +137.7%                |            82   | +0.0%                   |            30 |            0 |          0 |      1591.73  |           57 |        11230 |        4081   |       7299.15 |         11230 |     2.67142  |                44.7443 |           1.09239  |     6632.3 |     5995.3 |     4141   |      99.8 |      39.6 |      12.5 |
| [qgis310 > somap310_fix > lk.txt](../results/details/compare-major-bigfile/20201029-220951/qgis310/somap310_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |                 57.7 | +586.9%                      |          442.8 | +2104.4%               |         17150   | +20814.6%               |            30 |            0 |          0 |     14760.2   |         2125 |        17664 |       17611.6 |      17653    |         17664 |     0.572464 |                15.5177 |           0.234092 |     4337.7 |     4318.8 |     4306.3 |      38   |      13.9 |      12.4 |

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