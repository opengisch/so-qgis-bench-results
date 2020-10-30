# QGIS Benchmark summary compare-featureinfo (20201028-023646)


compare different version of QGIS servers using the same settings

_run completed in 00h 01m 29s_
## Summary plot
An interactive summary plot can be found [here](report_compare-featureinfo_20201028-023646_plot.html)

## Summary
| name               | group   |   duration s |   medianResTime |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------|---------|--------------|-----------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316-standalone | Global  |         27.8 |           123   |               0   |           347 |          149 |     2361.1 |    2359.8  |     2358.5 |      27.6 |     18.1  |       8.5 |       42.9 |
| qgis316            | Global  |         30.2 |           143   |               8.9 |           347 |          149 |     2387   |    2358.6  |     2344.4 |      36   |     24.6  |       8.5 |       42.9 |
| qgis218            | Global  |         32.3 |            67.5 |              16.4 |           347 |          149 |     2547.3 |    2476.45 |     2332   |      88.5 |     33.05 |      10.2 |       42.9 |
| qgis310            | Global  |        101.1 |           498.5 |             263.9 |           347 |          149 |     2377.7 |    2346.95 |     2332.3 |      24.5 |     19.8  |       9.3 |       42.9 |
| qgis314            | Global  |        111   |           564   |             299.7 |           347 |          149 |     2378.8 |    2345.05 |     2316.7 |      34   |     21.95 |       8.8 |       42.9 |

## Aggregated
| name                                             | group                    |   duration s |   medianResTime |   group penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|--------------------------------------------------|--------------------------|--------------|-----------------|-------------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis218 > somap218_grundplanav_farbig            | somap_grundplanav_farbig |          1.8 |             5   |               0   |           149 |          149 |     2530.1 |     2530.1 |     2530.1 |      23.8 |      23.8 |      23.8 |        100 |
| qgis314 > somap314_grundplanav_farbig            | somap_grundplanav_farbig |          6.2 |            20   |             249.8 |           149 |          149 |     2378.8 |     2347.7 |     2316.7 |      34   |      29.2 |      24.4 |        100 |
| qgis316-standalone > somap316_grundplanav_farbig | somap_grundplanav_farbig |          6.8 |            16   |             285.4 |           149 |          149 |     -inf   |      nan   |      inf   |    -inf   |     nan   |     inf   |        100 |
| qgis316 > somap316_grundplanav_farbig            | somap_grundplanav_farbig |          7.5 |            24   |             325.8 |           149 |          149 |     2387   |     2365.7 |     2344.4 |      36   |      31.1 |      26.1 |        100 |
| qgis310 > somap310_grundplanav_farbig            | somap_grundplanav_farbig |          9.8 |            23   |             455.3 |           149 |          149 |     2377.7 |     2355   |     2332.3 |      24.5 |      24.1 |      23.7 |        100 |
| qgis316-standalone > somap316_lk                 | somap_lk                 |         21   |           107   |               0   |           198 |            0 |     2361.1 |     2359.8 |     2358.5 |      27.6 |      18.1 |       8.5 |          0 |
| qgis316 > somap316_lk                            | somap_lk                 |         22.7 |           119   |               8.3 |           198 |            0 |     2356.8 |     2351.5 |     2346.1 |      27.6 |      18.1 |       8.5 |          0 |
| qgis218 > somap218_lk                            | somap_lk                 |         30.6 |            62.5 |              45.9 |           198 |            0 |     2547.3 |     2422.8 |     2332   |      88.5 |      42.3 |      10.2 |          0 |
| qgis310 > somap310_lk                            | somap_lk                 |         91.2 |           475.5 |             335.5 |           198 |            0 |     2348.8 |     2338.9 |     2335   |      21.7 |      15.5 |       9.3 |          0 |
| qgis314 > somap314_lk                            | somap_lk                 |        104.8 |           544   |             400.3 |           198 |            0 |     2353.4 |     2342.4 |     2335.9 |      20.1 |      14.7 |       8.8 |          0 |

## Detail
| name                                                                                                                                                                                                                   | group                                         |   duration s |   group penalty % |   sampleCount |   errorCount |   errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|--------------|-------------------|---------------|--------------|------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis218 > somap218_grundplanav_farbig > featureinfo_av.txt](../results/details/compare-featureinfo/20201028-023646/qgis218/somap218_grundplanav_farbig/featureinfo_av.txt/dashboard/index.html)                       | somap_grundplanav_farbig > featureinfo_av.txt |          1.8 |               0   |           149 |          149 |        100 |       11.8792 |             5   |            2 |          196 |           8   |         11.5  |        196    |     279.55   |               129.37   |          135.084   |     2530.1 |     2530.1 |     2530.1 |      23.8 |      23.8 |      23.8 |
| [qgis314 > somap314_grundplanav_farbig > featureinfo_av.txt](../results/details/compare-featureinfo/20201028-023646/qgis314/somap314_grundplanav_farbig/featureinfo_av.txt/dashboard/index.html)                       | somap_grundplanav_farbig > featureinfo_av.txt |          6.2 |             249.8 |           149 |          149 |        100 |       41.557  |            20   |            4 |          650 |          29   |        150.5  |        650    |     154.244  |                61.7347 |           74.5342  |     2378.8 |     2347.7 |     2316.7 |      34   |      29.2 |      24.4 |
| [qgis316-standalone > somap316_grundplanav_farbig > featureinfo_av.txt](../results/details/compare-featureinfo/20201028-023646/qgis316-standalone/somap316_grundplanav_farbig/featureinfo_av.txt/dashboard/index.html) | somap_grundplanav_farbig > featureinfo_av.txt |          6.8 |             285.4 |           149 |          149 |        100 |       45.7785 |            16   |            8 |          711 |          23   |        281.5  |        711    |     153.292  |                48.3298 |           76.1699  |      nan   |      nan   |      nan   |     nan   |     nan   |     nan   |
| [qgis316 > somap316_grundplanav_farbig > featureinfo_av.txt](../results/details/compare-featureinfo/20201028-023646/qgis316/somap316_grundplanav_farbig/featureinfo_av.txt/dashboard/index.html)                       | somap_grundplanav_farbig > featureinfo_av.txt |          7.5 |             325.8 |           149 |          149 |        100 |       50.5839 |            24   |            6 |          737 |          37   |        254    |        737    |     136.823  |                55.43   |           66.1157  |     2387   |     2365.7 |     2344.4 |      36   |      31.1 |      26.1 |
| [qgis310 > somap310_grundplanav_farbig > featureinfo_av.txt](../results/details/compare-featureinfo/20201028-023646/qgis310/somap310_grundplanav_farbig/featureinfo_av.txt/dashboard/index.html)                       | somap_grundplanav_farbig > featureinfo_av.txt |          9.8 |             455.3 |           149 |          149 |        100 |       65.9664 |            23   |            5 |          972 |          31   |        496    |        972    |     113.74   |                46.301  |           54.9618  |     2377.7 |     2355   |     2332.3 |      24.5 |      24.1 |      23.7 |
| [qgis316-standalone > somap316_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201028-023646/qgis316-standalone/somap316_lk/featureinfo_lk.txt/dashboard/index.html)                                 | somap_lk > featureinfo_lk.txt                 |         21   |               0   |           198 |            0 |          0 |      105.828  |           107   |           37 |          198 |         140.1 |        147.05 |        190.08 |      79.2    |                65.2    |           38.3227  |     2361.1 |     2359.8 |     2358.5 |      27.6 |      18.1 |       8.5 |
| [qgis316 > somap316_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201028-023646/qgis316/somap316_lk/featureinfo_lk.txt/dashboard/index.html)                                                       | somap_lk > featureinfo_lk.txt                 |         22.7 |               8.3 |           198 |            0 |          0 |      114.652  |           119   |           36 |          174 |         141   |        151    |        169.05 |      73.8806 |                68.3244 |           34.7387  |     2356.8 |     2351.5 |     2346.1 |      27.6 |      18.1 |       8.5 |
| [qgis218 > somap218_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201028-023646/qgis218/somap218_lk/featureinfo_lk.txt/dashboard/index.html)                                                       | somap_lk > featureinfo_lk.txt                 |         30.6 |              45.9 |           198 |            0 |          0 |      154.364  |            62.5 |           19 |         3037 |         122.7 |       1055.3  |       2086.6  |      52.3948 |                57.2133 |           24.636   |     2547.3 |     2422.8 |     2332   |      88.5 |      42.3 |      10.2 |
| [qgis310 > somap310_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201028-023646/qgis310/somap310_lk/featureinfo_lk.txt/dashboard/index.html)                                                       | somap_lk > featureinfo_lk.txt                 |         91.2 |             335.5 |           198 |            0 |          0 |      460.833  |           475.5 |          164 |          560 |         507.2 |        518.05 |        557.03 |      20.4313 |                18.9347 |            9.60681 |     2348.8 |     2338.9 |     2335   |      21.7 |      15.5 |       9.3 |
| [qgis314 > somap314_lk > featureinfo_lk.txt](../results/details/compare-featureinfo/20201028-023646/qgis314/somap314_lk/featureinfo_lk.txt/dashboard/index.html)                                                       | somap_lk > featureinfo_lk.txt                 |        104.8 |             400.3 |           198 |            0 |          0 |      529.439  |           544   |          209 |          615 |         583.1 |        592    |        607.08 |      17.8781 |                16.4463 |            8.40629 |     2353.4 |     2342.4 |     2335.9 |      20.1 |      14.7 |       8.8 |

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