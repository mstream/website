package io.mstream.website.config;


import com.google.inject.Module;
import com.google.inject.util.Modules;

import javax.inject.Provider;

public class MainModuleProvider implements Provider<Module> {

    @Override
    public Module get() {
        return Modules.combine(
                new RoutersModule(),
                new ArticlesModule());
    }
}
