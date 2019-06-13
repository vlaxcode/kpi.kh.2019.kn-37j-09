package main

import (
		"github.com/go-chi/chi"
		"github.com/go-chi/chi/middleware"
		"log"
		"net/http"
		"path/filepath"
)

var HelloHandler = func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Home page"))
}

func main()  {
		router := chi.NewRouter();
		router.Use(middleware.DefaultLogger)

		staticFolder, err := filepath.Abs("/media/jacob/abc30b89-8065-4244-b112-82b68bfe0854/jacob/repo_projects/kpi.kh.2019.kn-37j-09/build")
		if err != nil {
				panic(err.Error())
		}

		router.Handle("/*", http.FileServer(http.Dir(staticFolder)))
		router.Route("/api", func(r chi.Router) {
				r.Get("/home", HelloHandler)
		})

		log.Fatal(http.ListenAndServe(":8000", router))
}

