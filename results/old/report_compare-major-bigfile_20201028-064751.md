# QGIS Benchmark summary compare-major-bigfile (20201028-064751)


compare the effect of different QGIS major version with big filesizes

_run completed in 00h 09m 26s_
## Summary plot
An interactive summary plot can be found [here](report_compare-major-bigfile_20201028-064751_plot.html)

## Summary
| name    | group   |   duration s |   medianResTime |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|--------------|-----------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 | Global  |         72.7 |          1339.5 |               0   |            72 |            0 |     5318.6 |    5081.3  |     2778.6 |      99.7 |   31.9667 |      10.2 |        0   |
| qgis316 | Global  |        943.7 |         43850.5 |            1198.3 |            72 |            0 |     5139.1 |    3427.53 |     2999.2 |      38.3 |   15.1667 |      12.4 |        0   |
| qgis310 | Global  |       1421.3 |         69704   |            1855.4 |            72 |            0 |     4836.3 |    3094.67 |     2902.2 |      40   |   13.5667 |      12.3 |        0   |
| qgis314 | Global  |       1576.4 |         73671   |            2068.8 |            72 |           23 |     3987   |    3225.67 |     2974.4 |      39.2 |   14.2333 |      12.3 |       31.9 |

## Aggregated
| name                   | group     |   duration s |   medianResTime |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------|-----------|--------------|-----------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 > somap218_fix | somap_fix |         72.7 |          1339.5 |               0   |            72 |            0 |     5318.6 |    5081.3  |     2778.6 |      99.7 |   31.9667 |      10.2 |        0   |
| qgis316 > somap316_fix | somap_fix |        943.7 |         43850.5 |            1198.3 |            72 |            0 |     5139.1 |    3427.53 |     2999.2 |      38.3 |   15.1667 |      12.4 |        0   |
| qgis310 > somap310_fix | somap_fix |       1421.3 |         69704   |            1855.4 |            72 |            0 |     4836.3 |    3094.67 |     2902.2 |      40   |   13.5667 |      12.3 |        0   |
| qgis314 > somap314_fix | somap_fix |       1576.4 |         73671   |            2068.8 |            72 |           23 |     3987   |    3225.67 |     2974.4 |      39.2 |   14.2333 |      12.3 |       31.9 |

## Detail
| name                                                                                                                                               | group                 |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218 > somap218_fix > av_f.txt](../results/details/compare-major-bigfile/20201028-064751/qgis218/somap218_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |         13   |               0   |            22 |            0 |     0      |       590.5   |           496.5 |          212 |         1298 |        1153.8 |       1290.95 |          1298 |    11.1055   |               432.038  |          4.56978   |     5318.6 |     5318.6 |     5318.6 |      30.4 |      30.4 |      30.4 |
| [qgis310 > somap310_fix > av_f.txt](../results/details/compare-major-bigfile/20201028-064751/qgis310/somap310_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |        567.3 |            4266.9 |            22 |            0 |     0      |     25786.6   |         29477   |         3890 |        34480 |       34026.3 |      34422.2  |         34480 |     0.321102 |                42.0953 |          0.13213   |     3950.7 |     3156.5 |     2935.5 |      38.6 |      13.3 |      12.3 |
| [qgis316 > somap316_fix > av_f.txt](../results/details/compare-major-bigfile/20201028-064751/qgis316/somap316_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |        594.1 |            4473.3 |            22 |            0 |     0      |     27005.6   |         29593.5 |         4088 |        38690 |       38262.5 |      38655.3  |         38690 |     0.325564 |                42.6804 |          0.133966  |     4029.5 |     3552.2 |     3031.7 |      38.3 |      13.3 |      12.4 |
| [qgis314 > somap314_fix > av_f.txt](../results/details/compare-major-bigfile/20201028-064751/qgis314/somap314_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |        946.2 |            7183.7 |            22 |            5 |    22.7273 |     43010.5   |         50068.5 |            2 |       109163 |       60011.4 |     101790    |        109163 |     0.190517 |                16.159  |          0.0783956 |     3967.7 |     3319.1 |     2976.5 |      30.2 |      13.1 |      12.3 |
| [qgis218 > somap218_fix > av_sw.txt](../results/details/compare-major-bigfile/20201028-064751/qgis218/somap218_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |         13.5 |               0   |            20 |            0 |     0      |       673.2   |           764.5 |          217 |         1262 |        1217.8 |       1260.3  |          1262 |    10.2407   |               173.952  |          4.17827   |     5256.7 |     5256.7 |     5256.7 |      27.7 |      27.7 |      27.7 |
| [qgis314 > somap314_fix > av_sw.txt](../results/details/compare-major-bigfile/20201028-064751/qgis314/somap314_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |         22.9 |              69.9 |            20 |           18 |    90      |      1143.5   |             1   |            1 |        13071 |        8754.6 |      12903.5  |         13071 |     1.5259   |               101.262  |          0.62258   |     3987   |     3363.2 |     2990.3 |      23.9 |      13.8 |      12.4 |
| [qgis316 > somap316_fix > av_sw.txt](../results/details/compare-major-bigfile/20201028-064751/qgis316/somap316_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |        329.6 |            2347.8 |            20 |            0 |     0      |     16478.5   |         13515   |          997 |        27853 |       27670.5 |      27844.3  |         27853 |     0.461979 |               225.34   |          0.188491  |     5139.1 |     3710.6 |     3071.8 |      31   |      13.5 |      12.5 |
| [qgis310 > somap310_fix > av_sw.txt](../results/details/compare-major-bigfile/20201028-064751/qgis310/somap310_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |        412.1 |            2960.6 |            20 |            0 |     0      |     20603.7   |         22920   |         2226 |        29129 |       28846.8 |      29115    |         29129 |     0.373204 |               181.751  |          0.15227   |     4836.3 |     3186.6 |     2938.2 |      26.1 |      13.7 |      12.3 |
| [qgis316 > somap316_fix > lk.txt](../results/details/compare-major-bigfile/20201028-064751/qgis316/somap316_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |         20   |               0   |            30 |            0 |     0      |       665.567 |           742   |          295 |          881 |         846.5 |        865.6  |           881 |    10.9689   |               297.311  |          4.4854    |     3031.1 |     3019.8 |     2999.2 |      28.8 |      18.7 |      12.6 |
| [qgis218 > somap218_fix > lk.txt](../results/details/compare-major-bigfile/20201028-064751/qgis218/somap218_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |         46.2 |             131.5 |            30 |            0 |     0      |      1541     |            78.5 |           61 |        10641 |        4068.5 |       7035.2  |         10641 |     2.81928  |                47.221  |          1.15286   |     5250.6 |     4668.6 |     2778.6 |      99.7 |      37.8 |      10.2 |
| [qgis310 > somap310_fix > lk.txt](../results/details/compare-major-bigfile/20201028-064751/qgis310/somap310_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |        441.9 |            2113.3 |            30 |            0 |     0      |     14731.2   |         17307   |         1982 |        17519 |       17443.8 |      17514    |         17519 |     0.574834 |                15.5819 |          0.235061  |     2962.2 |     2940.9 |     2902.2 |      40   |      13.7 |      12.4 |
| [qgis314 > somap314_fix > lk.txt](../results/details/compare-major-bigfile/20201028-064751/qgis314/somap314_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |        607.3 |            2941.6 |            30 |            0 |     0      |     20243.9   |         23601.5 |         2927 |        24243 |       23916.5 |      24097.8  |         24243 |     0.416048 |                11.2749 |          0.17013   |     3077   |     2994.7 |     2974.4 |      39.2 |      15.8 |      12.3 |

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

  qgis314:
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_fix:
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
  qgis314:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"false"'
      QGIS_VERSION: '3.14'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap314_fix:
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