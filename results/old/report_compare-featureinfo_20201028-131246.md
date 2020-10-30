# QGIS Benchmark summary compare-featureinfo (20201028-131246)


compare different version of QGIS servers using the same settings

_run completed in 00h 01m 01s_
## Summary plot
An interactive summary plot can be found [here](report_compare-featureinfo_20201028-131246_plot.html)

## Summary
| name               | group   |   runtime s |   runtime s penalty % |   medianResTime |   medianResTime penalty % |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------|---------|-------------|-----------------------|-----------------|---------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-standalone | Global  |        10   |                   0   |            46.5 |                       0   |           17 |          501 |           347 |          149 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |       42.9 |
| qgis316            | Global  |        10.5 |                   4.1 |            49   |                       5.4 |           10 |          499 |           347 |          149 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |       42.9 |
| qgis218            | Global  |        28   |                 179.1 |            53   |                      14   |           13 |         3154 |           347 |          149 |     7197.2 |     7092.7 |     6983.1 |      93.2 |      48.2 |       2.6 |       42.9 |
| qgis310            | Global  |        49.1 |                 388.6 |           254   |                     446.2 |           60 |          841 |           347 |          149 |     6971.9 |     6959.3 |     6937.3 |      19.1 |      14.8 |       7.8 |       42.9 |
| qgis314            | Global  |        71.4 |                 610.7 |           318.5 |                     584.9 |          111 |          992 |           347 |          149 |     6985.6 |     6971.1 |     6961.2 |      64.9 |      45.1 |      11   |       42.9 |

## Aggregated
| name                                             | group                    |   runtime s |   runtime s penalty % |   medianResTime |   medianResTime penalty % |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------------------------------------|--------------------------|-------------|-----------------------|-----------------|---------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 > somap218_grundplanav_farbig            | somap_grundplanav_farbig |         1.2 |                   0   |             3   |                       0   |            1 |          132 |           149 |          149 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |        100 |
| qgis316-standalone > somap316_grundplanav_farbig | somap_grundplanav_farbig |         2.5 |                 114.1 |             8   |                     166.7 |            4 |          391 |           149 |          149 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |        100 |
| qgis316 > somap316_grundplanav_farbig            | somap_grundplanav_farbig |         3   |                 151.6 |            11   |                     266.7 |            4 |          407 |           149 |          149 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |        100 |
| qgis310 > somap310_grundplanav_farbig            | somap_grundplanav_farbig |         4.3 |                 268.2 |            13   |                     333.3 |            3 |          566 |           149 |          149 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |        100 |
| qgis314 > somap314_grundplanav_farbig            | somap_grundplanav_farbig |         4.5 |                 286   |            17   |                     466.7 |            4 |          508 |           149 |          149 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |        100 |
| qgis316 > somap316_lk                            | somap_lk                 |         7.5 |                   0   |            38   |                       0   |            6 |           92 |           198 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis316-standalone > somap316_lk                 | somap_lk                 |         7.5 |                   0.4 |            38.5 |                       1.3 |           13 |          110 |           198 |            0 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |          0 |
| qgis218 > somap218_lk                            | somap_lk                 |        26.9 |                 257.9 |            50   |                      31.6 |           12 |         3022 |           198 |            0 |     7197.2 |     7092.7 |     6983.1 |      93.2 |      48.2 |       2.6 |          0 |
| qgis310 > somap310_lk                            | somap_lk                 |        44.8 |                 496.4 |           241   |                     534.2 |           57 |          275 |           198 |            0 |     6971.9 |     6959.3 |     6937.3 |      19.1 |      14.8 |       7.8 |          0 |
| qgis314 > somap314_lk                            | somap_lk                 |        66.9 |                 791   |           301.5 |                     693.4 |          107 |          484 |           198 |            0 |     6985.6 |     6971.1 |     6961.2 |      64.9 |      45.1 |      11   |          0 |

## Detail
| name                                                                                                                                                                                                                   | group                                         |   runtime s |   runtime s penalty % |   medianResTime penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|-------------|-----------------------|---------------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218 > somap218_grundplanav_farbig > featureinfo_av.txt](../results/details/compare-featureinfo/20201028-131246/qgis218/somap218_grundplanav_farbig/featureinfo_av.txt/dashboard/index.html)                       | somap_grundplanav_farbig > featureinfo_av.txt |         1.2 |                   0   |                       0   |           149 |          149 |        100 |       7.87248 |             3   |            1 |          132 |           6   |         10.5  |        129.5  |     353.919  |               163.784  |           171.021  |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis316-standalone > somap316_grundplanav_farbig > featureinfo_av.txt](../results/details/compare-featureinfo/20201028-131246/qgis316-standalone/somap316_grundplanav_farbig/featureinfo_av.txt/dashboard/index.html) | somap_grundplanav_farbig > featureinfo_av.txt |         2.5 |                 114.1 |                     166.7 |           149 |          149 |        100 |      16.8523  |             8   |            4 |          391 |           9   |         10    |        390.5  |     252.971  |                79.7565 |           125.7    |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis316 > somap316_grundplanav_farbig > featureinfo_av.txt](../results/details/compare-featureinfo/20201028-131246/qgis316/somap316_grundplanav_farbig/featureinfo_av.txt/dashboard/index.html)                       | somap_grundplanav_farbig > featureinfo_av.txt |         3   |                 151.6 |                     266.7 |           149 |          149 |        100 |      19.8054  |            11   |            4 |          407 |          13   |         14    |        404    |     228.178  |                92.4399 |           110.26   |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis310 > somap310_grundplanav_farbig > featureinfo_av.txt](../results/details/compare-featureinfo/20201028-131246/qgis310/somap310_grundplanav_farbig/featureinfo_av.txt/dashboard/index.html)                       | somap_grundplanav_farbig > featureinfo_av.txt |         4.3 |                 268.2 |                     333.3 |           149 |          149 |        100 |      28.9866  |            13   |            3 |          566 |          17   |         48.5  |        566    |     186.717  |                76.0079 |            90.2256 |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis314 > somap314_grundplanav_farbig > featureinfo_av.txt](../results/details/compare-featureinfo/20201028-131246/qgis314/somap314_grundplanav_farbig/featureinfo_av.txt/dashboard/index.html)                       | somap_grundplanav_farbig > featureinfo_av.txt |         4.5 |                 286   |                     466.7 |           149 |          149 |        100 |      30.3893  |            17   |            4 |          508 |          23   |         27    |        507    |     182.598  |                73.083  |            88.2353 |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis316 > somap316_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201028-131246/qgis316/somap316_lk/featureinfo_lk.txt/dashboard/index.html)                                                       | somap_lk > featureinfo_lk.txt                 |         7.5 |                   0   |                       0   |           198 |            0 |          0 |      37.904   |            38   |            6 |           92 |          56   |         58.05 |         83.09 |     170.984  |               158.126  |            80.3969 |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis316-standalone > somap316_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201028-131246/qgis316-standalone/somap316_lk/featureinfo_lk.txt/dashboard/index.html)                                 | somap_lk > featureinfo_lk.txt                 |         7.5 |                   0.4 |                       1.3 |           198 |            0 |          0 |      38.0556  |            38.5 |           13 |          110 |          55   |         59    |        109.01 |     169.666  |               139.674  |            82.0965 |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis218 > somap218_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201028-131246/qgis218/somap218_lk/featureinfo_lk.txt/dashboard/index.html)                                                       | somap_lk > featureinfo_lk.txt                 |        26.9 |                 257.9 |                      31.6 |           198 |            0 |          0 |     135.677   |            50   |           12 |         3022 |         126.1 |       1038.1  |       2051.8  |      52.0642 |                56.8522 |            24.4806 |     7197.2 |     7092.7 |     6983.1 |      93.2 |      48.2 |       2.6 |
| [qgis310 > somap310_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201028-131246/qgis310/somap310_lk/featureinfo_lk.txt/dashboard/index.html)                                                       | somap_lk > featureinfo_lk.txt                 |        44.8 |                 496.4 |                     534.2 |           198 |            0 |          0 |     226.071   |           241   |           57 |          275 |         252.1 |        262.1  |        274.01 |      39.9435 |                37.0176 |            18.7814 |     6971.9 |     6959.3 |     6937.3 |      19.1 |      14.8 |       7.8 |
| [qgis314 > somap314_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201028-131246/qgis314/somap314_lk/featureinfo_lk.txt/dashboard/index.html)                                                       | somap_lk > featureinfo_lk.txt                 |        66.9 |                 791   |                     693.4 |           198 |            0 |          0 |     337.742   |           301.5 |          107 |          484 |         460.1 |        473    |        483.01 |      27.5459 |                25.3398 |            12.9521 |     6985.6 |     6971.1 |     6961.2 |      64.9 |      45.1 |      11   |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/marco/so.ch/qgis_benchmarking/so-qgis-bench/logs/prepared
parallel-requests: 10
reports-dir: ./reports/
result-dir: /home/marco/so.ch/qgis_benchmarking/so-qgis-bench/results

```
### test configurations

```
description: 'compare different version of QGIS servers using the same settings'
test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '1' #QGIS3
      QGIS_FCGI_PROCESSES: '1' #QGIS2
      PG_SERVICE: 'pg_service.conf'

  qgis218:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_lk:
        - featureinfo_lk.txt
      somap218_grundplanav_farbig:
        - featureinfo_av.txt

  qgis310:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_lk:
        - featureinfo_lk.txt
      somap310_grundplanav_farbig:
        - featureinfo_av.txt

  qgis314:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_lk:
        - featureinfo_lk.txt
      somap314_grundplanav_farbig:
        - featureinfo_av.txt

  qgis316:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.16'
    projects:
      somap316_lk:
        - featureinfo_lk.txt
      somap316_grundplanav_farbig:
        - featureinfo_av.txt

  qgis316-standalone:
    active: yes
    inherit: qgis316
    template: docker-compose-qgis-3-standalone
    path-prefix: ''
    use-map-param-path: '/io/data'

```
### parsed test configurations

```
description: compare different version of QGIS servers using the same settings
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
  qgis218:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
    inherit: base
    path-prefix: ows
    projects:
      somap218_grundplanav_farbig:
      - featureinfo_av.txt
      somap218_lk:
      - featureinfo_lk.txt
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
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: base
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - featureinfo_av.txt
      somap310_lk:
      - featureinfo_lk.txt
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
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.14'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap314_grundplanav_farbig:
      - featureinfo_av.txt
      somap314_lk:
      - featureinfo_lk.txt
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
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.16'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap316_grundplanav_farbig:
      - featureinfo_av.txt
      somap316_lk:
      - featureinfo_lk.txt
    template: docker-compose-qgis-3-nginx
  qgis316-standalone:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '1'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.16'
    inherit: qgis316
    path-prefix: ''
    projects:
      somap316_grundplanav_farbig:
      - featureinfo_av.txt
      somap316_lk:
      - featureinfo_lk.txt
    template: docker-compose-qgis-3-standalone
    use-map-param-path: /io/data

```