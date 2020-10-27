# QGIS Benchmark summary compare-major-bigfile (20201027-122229)


compare the effect of different QGIS major version with big filesizes

_run completed in 00h 10m 46s_
## Summary plot
An interactive summary plot can be found [here](report_compare-major-bigfile_20201027-122229_plot.html)

## Summary
| name    | group   |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 | Global  |         73.6 |               0   |            72 |            0 |     5024.1 |    4730.13 |     2474.8 |      99.4 |   52.5667 |       2.3 |          0 |
| qgis316 | Global  |        927.9 |            1161.1 |            72 |            0 |     4853.6 |    3109.03 |     2695   |      40.2 |   13.7333 |      12.4 |          0 |
| qgis310 | Global  |       1411.6 |            1818.5 |            72 |            0 |     4593.4 |    2784.83 |     2625.3 |      40   |   13.4667 |      12.3 |          0 |
| qgis314 | Global  |       2309.7 |            3039.1 |            72 |            0 |     4853.7 |    2909.17 |     2651.1 |      40   |   13.2667 |      12.2 |          0 |

## Aggregated
| name                   | group     |   duration s |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|------------------------|-----------|--------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 > somap218_fix | somap_fix |         73.6 |               0   |            72 |            0 |     5024.1 |    4730.13 |     2474.8 |      99.4 |   52.5667 |       2.3 |          0 |
| qgis316 > somap316_fix | somap_fix |        927.9 |            1161.1 |            72 |            0 |     4853.6 |    3109.03 |     2695   |      40.2 |   13.7333 |      12.4 |          0 |
| qgis310 > somap310_fix | somap_fix |       1411.6 |            1818.5 |            72 |            0 |     4593.4 |    2784.83 |     2625.3 |      40   |   13.4667 |      12.3 |          0 |
| qgis314 > somap314_fix | somap_fix |       2309.7 |            3039.1 |            72 |            0 |     4853.7 |    2909.17 |     2651.1 |      40   |   13.2667 |      12.2 |          0 |

## Detail
| name                                                                                                                                               | group                 |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218 > somap218_fix > av_f.txt](../results/details/compare-major-bigfile/20201027-122229/qgis218/somap218_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |         13.3 |               0   |            22 |            0 |          0 |       603.409 |           493   |          203 |         1286 |        1185.4 |       1285.85 |          1286 |    10.8588   |               422.442  |          4.46828   |     5016.7 |     4953.8 |     4890.5 |      81.3 |      56.7 |      23.2 |
| [qgis310 > somap310_fix > av_f.txt](../results/details/compare-major-bigfile/20201027-122229/qgis310/somap310_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |        559.6 |            4115.3 |            22 |            0 |          0 |     25435.3   |         29063   |         3657 |        33973 |       33710.4 |      33939.1  |         33973 |     0.324666 |                42.5625 |          0.133596  |     3617.7 |     2836.8 |     2627.6 |      32.7 |      13.4 |      12.3 |
| [qgis316 > somap316_fix > av_f.txt](../results/details/compare-major-bigfile/20201027-122229/qgis316/somap316_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |        584.3 |            4301.4 |            22 |            0 |          0 |     26558.4   |         29025   |         3838 |        38490 |       38092.8 |      38445.9  |         38490 |     0.331545 |                43.4645 |          0.136427  |     3699.5 |     3244.3 |     2727.5 |      40.2 |      13.4 |      12.4 |
| [qgis314 > somap314_fix > av_f.txt](../results/details/compare-major-bigfile/20201027-122229/qgis314/somap314_fix/av_f.txt/dashboard/index.html)   | somap_fix > av_f.txt  |       1061.7 |            7897.7 |            22 |            0 |          0 |     48258.8   |         49089.5 |         6362 |       104018 |       90596.8 |     103983    |        104018 |     0.172157 |                22.568  |          0.0708407 |     3663.2 |     2983.4 |     2660   |      40   |      13.1 |      12.2 |
| [qgis218 > somap218_fix > av_sw.txt](../results/details/compare-major-bigfile/20201027-122229/qgis218/somap218_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |         15   |               0   |            20 |            0 |          0 |       751.35  |           779   |          253 |         1592 |        1334.7 |       1579.5  |          1592 |     8.58369  |               145.806  |          3.50221   |     5024.1 |     4994.1 |     4964.2 |      95.5 |      61.7 |      27.9 |
| [qgis316 > somap316_fix > av_sw.txt](../results/details/compare-major-bigfile/20201027-122229/qgis316/somap316_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |        324.8 |            2061.2 |            20 |            0 |          0 |     16238.6   |         13158   |         1007 |        27850 |       27597.8 |      27837.6  |         27850 |     0.466429 |               228.079  |          0.190307  |     4853.6 |     3373.7 |     2695   |      27.9 |      13.9 |      12.4 |
| [qgis310 > somap310_fix > av_sw.txt](../results/details/compare-major-bigfile/20201027-122229/qgis310/somap310_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |        421.5 |            2704.9 |            20 |            0 |          0 |     21074.8   |         22741   |         2599 |        29558 |       29419.6 |      29552.5  |         29558 |     0.366206 |               178.343  |          0.149415  |     4593.4 |     2880   |     2648.7 |      40   |      13.5 |      12.3 |
| [qgis314 > somap314_fix > av_sw.txt](../results/details/compare-major-bigfile/20201027-122229/qgis314/somap314_fix/av_sw.txt/dashboard/index.html) | somap_fix > av_sw.txt |        656.1 |            4266   |            20 |            0 |          0 |     32804.1   |         32069   |         3099 |        49046 |       48887.7 |      49038.6  |         49046 |     0.233429 |               113.885  |          0.095241  |     4853.7 |     3074   |     2651.1 |      39.9 |      13.4 |      12.2 |
| [qgis316 > somap316_fix > lk.txt](../results/details/compare-major-bigfile/20201027-122229/qgis316/somap316_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |         18.9 |               0   |            30 |            0 |          0 |       629.433 |           686   |          280 |          811 |         799.2 |        809.9  |           811 |    11.6324   |               315.295  |          4.75672   |     2711.7 |     2709.1 |     2706.4 |      15.2 |      13.9 |      12.5 |
| [qgis218 > somap218_fix > lk.txt](../results/details/compare-major-bigfile/20201027-122229/qgis218/somap218_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |         45.3 |             139.8 |            30 |            0 |          0 |      1509.23  |            74.5 |           60 |        10083 |        4046.1 |       6781.35 |         10083 |     2.97501  |                49.8293 |          1.21654   |     4950.8 |     4242.5 |     2474.8 |      99.4 |      39.3 |       2.3 |
| [qgis310 > somap310_fix > lk.txt](../results/details/compare-major-bigfile/20201027-122229/qgis310/somap310_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |        430.6 |            2180.2 |            30 |            0 |          0 |     14352.5   |         16774.5 |         1954 |        17152 |       17123.1 |      17143.2  |         17152 |     0.587579 |                15.9274 |          0.240272  |     2659   |     2637.7 |     2625.3 |      28   |      13.5 |      12.4 |
| [qgis314 > somap314_fix > lk.txt](../results/details/compare-major-bigfile/20201027-122229/qgis314/somap314_fix/lk.txt/dashboard/index.html)       | somap_fix > lk.txt    |        592   |            3034.9 |            30 |            0 |          0 |     19732.2   |         23125   |         2700 |        23680 |       23381.7 |      23584.8  |         23680 |     0.426603 |                11.5609 |          0.174446  |     2695.1 |     2670.1 |     2651.6 |      31   |      13.3 |      12.4 |

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