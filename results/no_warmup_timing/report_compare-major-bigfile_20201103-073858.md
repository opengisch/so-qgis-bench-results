# QGIS Benchmark summary compare-major-bigfile (20201103-073858)


compare the effect of different QGIS major version with big filesizes

_run completed in 00h 09m 53s_

_Sample size per configuration 72_
## Summary plot
An interactive summary plot can be found [here](report_compare-major-bigfile_20201103-073858_plot.html)

## Summary
| name    | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 | Global  |                 32.8 | +0.0%                        |           75.9 | +0.0%                  |          1115.5 | +0.0%                   |          556 |        14017 |              1.6 |            72 |            0 |     5253.9 |    4956.37 |     2675.2 |      99.7 |      43.2 |      10.8 |          0 |
| qgis316 | Global  |                132.8 | +304.9%                      |          966.3 | +1173.4%               |         45069.5 | +3940.3%                |         5478 |        68611 |             13.1 |            72 |            0 |     5215.1 |    3327.33 |     2892.2 |      40   |      13.6 |      12.4 |          0 |
| qgis310 | Global  |                196.5 | +499.1%                      |         1463.6 | +1828.7%               |         70204.5 | +6193.5%                |         8793 |        84170 |             13.1 |            72 |            0 |     4693   |    2976.47 |     2794.2 |      40.1 |      13.5 |      12.4 |          0 |

## Aggregated
| name                   | group     |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   responseSizeMB |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------|-----------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 > somap218_fix | somap_fix |                 32.8 | +0.0%                        |           75.9 | +0.0%                  |          1115.5 | +0.0%                   |          556 |        14017 |              1.6 |            72 |            0 |     5253.9 |    4956.37 |     2675.2 |      99.7 |      43.2 |      10.8 |          0 |
| qgis316 > somap316_fix | somap_fix |                132.8 | +304.9%                      |          966.3 | +1173.4%               |         45069.5 | +3940.3%                |         5478 |        68611 |             13.1 |            72 |            0 |     5215.1 |    3327.33 |     2892.2 |      40   |      13.6 |      12.4 |          0 |
| qgis310 > somap310_fix | somap_fix |                196.5 | +499.1%                      |         1463.6 | +1828.7%               |         70204.5 | +6193.5%                |         8793 |        84170 |             13.1 |            72 |            0 |     4693   |    2976.47 |     2794.2 |      40.1 |      13.5 |      12.4 |          0 |

## Detail
| name                                                                                                                                               | group                 |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   responseSizeMB |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218 > somap218_fix > av_f.txt](../results/details/compare-major-bigfile/20201103-073858/qgis218/somap218_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |                  7.8 | +0.0%                        |           13   | +0.0%                  |           305.5 | +0.0%                   |            22 |            0 |          0 |       592.727 |          226 |         1295 |        1192.7 |       1293.65 |          1295 |    10.8321   |               421.402  |           4.45728  |              0.8 |     5213.5 |     5213.5 |     5213.5 |      27.2 |      27.2 |      27.2 |
| [qgis316 > somap316_fix > av_f.txt](../results/details/compare-major-bigfile/20201103-073858/qgis316/somap316_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |                 74.4 | +853.8%                      |          607.4 | +4558.2%               |         30228   | +9794.6%                |            22 |            0 |          0 |     27610.2   |         4182 |        39291 |       39198.9 |      39281.1  |         39291 |     0.318998 |                41.8196 |           0.131264 |              2.8 |     3893.7 |     3391.1 |     2892.2 |      26.9 |      13.2 |      12.4 |
| [qgis310 > somap310_fix > av_f.txt](../results/details/compare-major-bigfile/20201103-073858/qgis310/somap310_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |                 76.1 | +875.6%                      |          582.9 | +4370.1%               |         30079   | +9745.8%                |            22 |            0 |          0 |     26495.8   |         4081 |        35224 |       34897.5 |      35176.2  |         35224 |     0.312021 |                40.9048 |           0.128393 |              2.8 |     3709.3 |     3034.5 |     2794.2 |      29.2 |      13.4 |      12.4 |
| [qgis218 > somap218_fix > av_sw.txt](../results/details/compare-major-bigfile/20201103-073858/qgis218/somap218_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |                  8.1 | +0.0%                        |           14.7 | +0.0%                  |           728   | +0.0%                   |            20 |            0 |          0 |       732.65  |          266 |         1689 |        1295.5 |       1669.65 |          1689 |     8.28844  |               140.791  |           3.38175  |              0.3 |     5253.9 |     5178.5 |     5106.2 |      90.6 |      62.1 |      25.4 |
| [qgis316 > somap316_fix > av_sw.txt](../results/details/compare-major-bigfile/20201103-073858/qgis316/somap316_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |                 50   | +517.3%                      |          338.5 | +2210.0%               |         14082   | +1834.3%                |            20 |            0 |          0 |     16924.5   |         1010 |        28447 |       28369.9 |      28444    |         28447 |     0.449317 |               219.632  |           0.183325 |              9.5 |     5215.1 |     3669   |     2961.5 |      40   |      13.8 |      12.4 |
| [qgis310 > somap310_fix > av_sw.txt](../results/details/compare-major-bigfile/20201103-073858/qgis310/somap310_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |                 60.7 | +649.4%                      |          421.7 | +2777.7%               |         22443.5 | +2982.9%                |            20 |            0 |          0 |     21083.1   |         2658 |        30241 |       30205.1 |      30240.2  |         30241 |     0.36249  |               176.533  |           0.147899 |              9.5 |     4693   |     3053   |     2799.8 |      32   |      13.7 |      12.4 |
| [qgis316 > somap316_fix > lk.txt](../results/details/compare-major-bigfile/20201103-073858/qgis316/somap316_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |                  8.4 | +0.0%                        |           20.4 | +0.0%                  |           759.5 | +826.2%                 |            30 |            0 |          0 |       678.467 |          286 |          873 |         853.2 |        863.65 |           873 |    10.929    |               296.228  |           4.46906  |              0.8 |     2932.2 |     2921.9 |     2911.6 |      14.9 |      13.8 |      12.7 |
| [qgis218 > somap218_fix > lk.txt](../results/details/compare-major-bigfile/20201103-073858/qgis218/somap218_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |                 16.9 | +101.2%                      |           48.2 | +136.8%                |            82   | +0.0%                   |            30 |            0 |          0 |      1606.3   |           64 |        11033 |        4079.6 |       7211.6  |         11033 |     2.71912  |                45.5432 |           1.1119   |              0.5 |     5159.6 |     4477.1 |     2675.2 |      99.7 |      40.3 |      10.8 |
| [qgis310 > somap310_fix > lk.txt](../results/details/compare-major-bigfile/20201103-073858/qgis310/somap310_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |                 59.7 | +610.7%                      |          459   | +2155.0%               |         17682   | +21463.4%               |            30 |            0 |          0 |     15299.4   |         2054 |        18705 |       18594.2 |      18651.7  |         18705 |     0.552395 |                14.9737 |           0.225885 |              0.8 |     2871   |     2841.9 |     2830.9 |      40.1 |      13.4 |      12.5 |

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