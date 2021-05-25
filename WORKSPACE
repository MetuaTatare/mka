workspace(
    name = "mka",
    managed_directories = {"@npm": ["node_modules"]},
)

yarn_install(
    name = "npm",
    data = [
        "//:.npmrc",
    ],
    inluded_files = [
        # source files
        ".js",
        # type defs
        ".d.ts",
        # used by @bazel/typescript for the @bazel/worker package for bazel worker protocol defs
        ".proto",
        # used by @bazel/typescript and typescript
        ".json",
        # used by nodegit
        ".node",
    ]
)